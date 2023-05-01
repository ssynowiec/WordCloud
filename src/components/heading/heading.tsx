import { ReactNode } from 'react';
import { clsx } from 'clsx';

type HeadingProps = {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'small' | 'medium' | 'large';
	className?: string;
	children: ReactNode;
};

export const Heading = ({
	tag: Tag,
	size,
	className,
	children,
}: HeadingProps) => {
	return (
		<Tag
			className={clsx(
				'font-bold',
				{
					'text-5xl': size === 'large',
					'text-3xl': size === 'medium',
					'text-xl': size === 'small',
				},
				className,
			)}
		>
			{children}
		</Tag>
	);
};
