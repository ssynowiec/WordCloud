import { UserContext } from '../../context/userContext/userContext.tsx';
import { useContext } from 'react';
import { MainLayout } from '../../components/layouts/mainLayout.tsx';
import { Button } from '../../components/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../../components/heading/heading.tsx';

export const Result = () => {
	const { user, setUser } = useContext(UserContext);
	const { score, setScore } = useContext(UserContext);

	const navigate = useNavigate();
	const playAgain = () => {
		setUser(null);
		setScore(0);
		navigate('/');
	};

	return (
		<MainLayout>
			<section>
				<Heading tag='h1' size='medium'>
					Congratulations, {user}!
				</Heading>
				<Heading tag='h2' size='medium'>
					Your score:
				</Heading>
				<Heading tag='h3' size='medium' className='text-sky-500'>
					{score} points
				</Heading>
				<Button onClick={playAgain}>play again</Button>
			</section>
		</MainLayout>
	);
};
