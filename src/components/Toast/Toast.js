import React from 'react';
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant, handleDismiss, children }) {
	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				handleDismiss();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleDismiss]);

	const className = `${styles.toast} ${styles[variant]}`;

	const Icon = ICONS_BY_VARIANT[variant];

	return (
		<div className={className}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>{children}</p>
			<button className={styles.closeButton} onClick={handleDismiss}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
