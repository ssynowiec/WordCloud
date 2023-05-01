import { UserContext } from '../../components/userProvider/userProvider.tsx';
import { useContext } from 'react';
import { MainLayout } from '../../components/layouts/mainLayout.tsx';
import { useGameForm } from '../../components/gameForm/useGameForm.tsx';
import { Button } from '../../components/button/button.tsx';
import { useNavigate } from 'react-router-dom';

export const Result = () => {
	const { user, setUser } = useContext(UserContext);
	const { score } = useGameForm();
	const navigate = useNavigate();
	const playAgain = () => {
		setUser(null);
		navigate('/');
	};

	return (
		<MainLayout>
			<h1 className='font-bold'>Congratulations, {user}!</h1>
			<p className='font-bold'>Your score:</p>
			<p className='font-bold text-sky-500'>{score} points</p>
			<Button onClick={playAgain}>Play again</Button>
		</MainLayout>
	);
};
