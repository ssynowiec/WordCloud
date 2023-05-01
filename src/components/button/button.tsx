import type { ReactNode } from 'react';

type BaseButtonProps = {
	children: ReactNode;
	disabled?: boolean;
};

type ButtonPropsTypeSubmit = {
	onClick?: () => void;
	type: 'submit';
};

type ButtonPropsTypeButton = {
	type?: 'button';
	onClick: () => void;
};

type ButtonProps = (ButtonPropsTypeSubmit | ButtonPropsTypeButton) &
	BaseButtonProps;

export const Button = ({ onClick, type, disabled, children }: ButtonProps) => {
	return (
		<button
			type={type}
			className='m-4 rounded-md border-2 border-sky-500 px-8 py-2 font-bold text-sky-500 duration-300 hover:bg-sky-500 hover:text-white'
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
