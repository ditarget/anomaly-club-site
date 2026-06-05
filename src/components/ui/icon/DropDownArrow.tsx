interface DropDownArrowProps {
	className: string
}

export function DropDownArrow({ className }: DropDownArrowProps) {
	return (
		<div className={className}>
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M13 6L8 10.5L3 6'
					stroke='#DBDBDB'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</div>
	)
}
