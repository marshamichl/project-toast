import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [selectedVariant, setSelectedVariant] = React.useState(
		VARIANT_OPTIONS[0]
	);

	const [toastMessages, setToastMessages] = React.useState([]);

	function handleSubmit() {
		if (!message) {
			return;
		}

		const newToast = {
			id: crypto.randomUUID(),
			message,
			variant: selectedVariant,
		};

		setToastMessages([...toastMessages, newToast]);
		setMessage('');
		setSelectedVariant(VARIANT_OPTIONS[0]);
	}

	function handleDismissToast(id) {
		const newToastList = toastMessages.filter(
			(toast) => toast.id !== id
		);
		setToastMessages(newToastList);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
			</header>

			<ToastShelf
				toasts={toastMessages}
				handleDismiss={handleDismissToast}
			/>

			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit();
				}}
				className={styles.controlsWrapper}
			>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						{VARIANT_OPTIONS.map((variant) => (
							<label key={variant} htmlFor={`variant-${variant}`}>
								<input
									id={`variant-${variant}`}
									type="radio"
									name="variant"
									value={variant}
									checked={variant === selectedVariant}
									onChange={(event) => {
										setSelectedVariant(event.target.value);
									}}
								/>
								{variant}
							</label>
						))}
					</div>
				</div>
				<div className={styles.row}>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						<Button type="submit">Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
