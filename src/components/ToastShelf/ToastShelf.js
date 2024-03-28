import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToastMessages }) {
	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				setToastMessages([]);
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [setToastMessages]);

	function handleDismissToast(id) {
		const newToastList = toasts.filter((toast) => toast.id !== id);
		setToastMessages(newToastList);
	}

	return (
		<ol className={styles.wrapper}>
			{toasts.length > 0 &&
				toasts.map((toast) => (
					<li key={toast.id} className={styles.toastWrapper}>
						<Toast
							handleDismiss={() => handleDismissToast(toast.id)}
							variant={toast.variant}
						>
							{toast.message}
						</Toast>
					</li>
				))}
		</ol>
	);
}

export default ToastShelf;
