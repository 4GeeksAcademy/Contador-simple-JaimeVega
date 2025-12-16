export const Clock = () => {
	return (
		<div className="number">
            <span>
				 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-9"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 12H8.5M12 7v5" />
                </svg>
			</span>
        </div>
	);
};
