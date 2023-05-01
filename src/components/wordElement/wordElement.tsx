import './wordElement.scss';
import { clsx } from 'clsx';
import { ChangeEvent, forwardRef } from 'react';

type WordElementProps = {
	word: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	name: string;
	correct?: boolean;
	checked?: boolean;
	disabled?: boolean;
};

export const WordElement = forwardRef<HTMLInputElement, WordElementProps>(
	(
		{ word, onChange, name, correct, checked, disabled }: WordElementProps,
		ref,
	) => {
		const x = Math.floor(Math.random() * 85);
		const y = Math.floor(Math.random() * 85);

		return (
			<div style={{ position: 'absolute', top: `${y}%`, left: `${x}%` }}>
				<input
					ref={ref}
					type='checkbox'
					id={word}
					className={`hidden`}
					value={word}
					disabled={disabled}
					name={name}
					onChange={onChange}
				/>
				<label
					htmlFor={word}
					className={clsx('cursor-pointer font-bold text-gray-300', {
						'cursor-not-allowed': disabled,
					})}
				>
					{correct && checked && <span className='text-green-500'>Good</span>}
					{!correct && checked && <span className='text-red-300'>Bad</span>}
					<br />
					<span
						className={clsx({
							'text-red-500': !correct && checked,
							'text-green-300': correct && checked,
						})}
					>
						{word}
					</span>
				</label>
			</div>
		);
	},
);
