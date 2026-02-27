import React from 'react';

export const Loading = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-4">
			<div className="flex items-center gap-2">
				<span className="text-xl font-medium text-foreground">Loading</span>
				<div className="flex gap-1 mt-2">
					<span className="w-1.5 h-1.5 rounded-full bg-foreground animate-bounce [animation-delay:-0.3s]"></span>
					<span className="w-1.5 h-1.5 rounded-full bg-foreground animate-bounce [animation-delay:-0.15s]"></span>
					<span className="w-1.5 h-1.5 rounded-full bg-foreground animate-bounce"></span>
				</div>
			</div>
		</div>
	);
};

export default Loading;
