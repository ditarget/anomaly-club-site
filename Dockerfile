# === Этап 1: сборка ===
FROM node:24.18.0-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости (включая dev)
COPY package*.json ./
RUN npm ci

# Копируем исходники
COPY . .

# Production build
RUN npm run build


# === Этап 2: финальный образ ===
FROM node:24.18.0-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Создаём непривилегированного пользователя
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Копируем standalone runtime
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Копируем статические файлы Next
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Копируем public
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]