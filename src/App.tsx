import './pages/home/app.scss';
import { UserForm } from './components/userForm/userForm.tsx';
import { MainLayout } from './components/layouts/mainLayout.tsx';

export const App = () => {
	return (
		<MainLayout>
			<h1 className='text-5xl font-bold'>WordCloud Game</h1>
			<UserForm />
		</MainLayout>
	);
};
