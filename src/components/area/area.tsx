import { ReactNode } from 'react';

type AreaProps = {
	children: ReactNode;
};

export const Area = ({ children }: AreaProps) => {
	return (
		<section className='relative m-4 h-80 rounded-md border-2 border-black px-8 py-5'>
			{children}
		</section>
	);
};
