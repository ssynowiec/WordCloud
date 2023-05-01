import './wordElement.scss';
import { clsx } from 'clsx';

type WordElementProps = {
	word: string;
	// FIXME: any
	register: any;
	correct?: boolean;
	checked?: boolean;
	disabled?: boolean;
};

export const WordElement = ({
	word,
	register,
	correct,
	checked,
	disabled,
}: WordElementProps) => {
	const x = Math.floor(Math.random() * 85);
	const y = Math.floor(Math.random() * 85);

	return (
		<div style={{ position: 'absolute', top: `${y}%`, left: `${x}%` }}>
			<input
				type='checkbox'
				id={word}
				className={`hidden`}
				value={word}
				disabled={disabled}
				{...register('answers')}
			/>
			<label htmlFor={word} className='cursor-pointer font-bold text-gray-300'>
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
};
