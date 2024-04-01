import React from 'react';

export function useEscapeKey(callback) {
	React.useEffect(() => {
		function handleKeyPress(event) {
			if (event.code === 'Escape') {
				callback();
			}
		}

		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [callback]);
}
