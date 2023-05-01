import '../../components/wordElement/wordElement.scss';
import { MainLayout } from '../../components/layouts/mainLayout.tsx';
import { GameForm } from '../../components/gameForm/gameForm.tsx';
import { useGameForm } from '../../components/gameForm/useGameForm.tsx';

export const Game = () => {
	const {
		question: { question, answers, correctAnswers },
	} = useGameForm();

	return (
		<MainLayout>
			<GameForm
				answers={answers}
				question={question}
				correctAnswers={correctAnswers}
			/>
		</MainLayout>
	);
};
