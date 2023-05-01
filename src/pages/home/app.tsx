import './app.scss';
import { UserForm } from '../../components/userForm/userForm.tsx';
import { MainLayout } from '../../components/layouts/mainLayout.tsx';
import { Heading } from '../../components/heading/heading.tsx';

export const App = () => {
	return (
		<MainLayout>
			<Heading tag='h1' size='large'>
				WordCloud Game
			</Heading>
			<UserForm />
		</MainLayout>
	);
};
