import { MainLayout } from '../../components/layouts/mainLayout.tsx';
import { Heading } from '../../components/heading/heading.tsx';

export const PageNotFound = () => {
	return (
		<MainLayout>
			<Heading tag='h1' size='large'>
				404 - Page not Found
			</Heading>
		</MainLayout>
	);
};
