import '../../components/wordElement/wordElement.scss';
import { MainLayout } from '../../components/layouts/mainLayout.tsx';
import { GameForm } from '../../components/gameForm/gameForm.tsx';
import { useGameForm } from '../../components/gameForm/useGameForm.tsx';

// const drawQuestion = () => {
// 	const questions = data;
//
// 	const randomIndex = Math.floor(Math.random() * questions.length);
// 	const question = questions[randomIndex].question;
// 	const answers = questions[randomIndex].all_words;
// 	const correctAnswers = questions[randomIndex].good_words;
//
// 	return { question, answers, correctAnswers };
// };

export const Game = () => {
	const {
		question: { question, answers, correctAnswers },
	} = useGameForm();
	// const { question, answers, correctAnswers } = drawQuestion();

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
