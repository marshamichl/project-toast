import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [selectedVariant, setSelectedVariant] = React.useState(
		VARIANT_OPTIONS[0]
	);

	function handleSubmit(event) {
		event.preventDefault();

		// if (!message) {
		// 	return;
		// }

		window.alert(`${selectedVariant} - ${message}`);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
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
						<Button type="submit" onClick={handleSubmit}>
							Pop Toast!
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
