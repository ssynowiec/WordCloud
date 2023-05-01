import type { HTMLInputTypeAttribute } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

type InputProps = {
	value?: string;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	isError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ value, type = 'text', placeholder, isError, ...rest }: InputProps,
		ref,
	) => {
		const classes = isError ? 'border-red-500' : 'border-gray-500';

		return (
			<input
				value={value}
				type={type}
				placeholder={placeholder}
				className={clsx('m-4 rounded-md border-2 px-6 py-3', classes)}
				ref={ref}
				{...rest}
			/>
		);
	},
);
