import type { ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<main className='item-center flex min-h-[90vh] w-full flex-col justify-center'>
			{children}
		</main>
	);
};
