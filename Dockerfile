# === Этап 1: сборка ===
FROM node:24-alpine AS builder

WORKDIR /app

# Устанавливаем ВСЕ зависимости (включая dev)
COPY package*.json ./
RUN npm ci

# Копируем исходники и собираем
COPY . .
RUN npm run build

# === Этап 2: финальный образ ===
FROM node:24-alpine AS runner

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Копируем только production-зависимости
COPY package*.json ./
RUN npm ci --only=production --omit=dev

# Копируем сборку
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

RUN chown -R nextjs:nodejs /app
USER nextjs

CMD ["npm", "run", "start"]

EXPOSE 3000
