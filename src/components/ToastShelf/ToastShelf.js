import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
	return (
		<ol className={styles.wrapper}>
			{toasts.length > 0 &&
				toasts.map((toast) => (
					<li key={toast.id} className={styles.toastWrapper}>
						<Toast
							id={toast.id}
							handleDismiss={handleDismiss}
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
