import React from 'react';
import { useEscapeKey } from '../../utils/hooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	function createToast(data) {
		const nextToasts = [
			...toasts,
			{
				id: crypto.randomUUID(),
				message: data.message,
				variant: data.variant,
			},
		];

		setToasts(nextToasts);
	}

	function dismissToast(id) {
		const newToastList = toasts.filter((toast) => toast.id !== id);
		setToasts(newToastList);
	}

	const dismissAllToasts = React.useCallback(() => {
		setToasts([]);
	}, []);

	useEscapeKey(dismissAllToasts);

	return (
		<ToastContext.Provider
			value={{
				toasts,
				createToast,
				dismissToast,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
