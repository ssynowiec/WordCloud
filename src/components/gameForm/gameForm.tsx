import { Area } from '../area/area.tsx';
import { WordElement } from '../wordElement/wordElement.tsx';
import { Button } from '../button/button.tsx';
import { useGameForm } from './useGameForm.tsx';
import { useNavigate } from 'react-router-dom';

type GameProps = {
	question: string;
	answers: string[];
	correctAnswers: string[];
};

export const GameForm = ({ question, answers, correctAnswers }: GameProps) => {
	const navigate = useNavigate();

	const { register, handleSubmit, onSubmit, errors, userAnswers, isSubmitted } =
		useGameForm();

	const finishGame = (e) => {
		e.preventDefault();
		navigate('/result');
	};

	return (
		<>
			<h1>{question}</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Area>
					{answers.map((answer, i) => {
						if (
							correctAnswers.includes(answer) &&
							userAnswers.includes(answer)
						) {
							return (
								<WordElement
									word={answer}
									{...register('answers')}
									key={i}
									checked={true}
									correct={true}
									// disabled={true}
								/>
							);
						} else if (
							!correctAnswers.includes(answer) &&
							userAnswers.includes(answer)
						) {
							return (
								<WordElement
									word={answer}
									{...register('answers')}
									key={i}
									checked={true}
									correct={false}
									// disabled={true}
								/>
							);
						} else {
							// TODO: add disabled after submit
							return (
								<WordElement word={answer} {...register('answers')} key={i} />
							);
						}
					})}
				</Area>

				{errors && (
					<p style={{ color: 'red' }}>
						{errors.answers && 'At least one word must be chosen'}
					</p>
				)}

				{isSubmitted ? (
					<Button onClick={finishGame}>finish game</Button>
				) : (
					<Button type='submit'>check answers</Button>
				)}
			</form>
		</>
	);
};
