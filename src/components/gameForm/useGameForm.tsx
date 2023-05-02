import { type SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { GameContext } from '../../context/gameContext/gameContext.tsx';
import { UserContext } from '../../context/userContext/userContext.tsx';

const formSchema = yup.object().shape({
	answers: yup.array().min(1).required('At least one word must be chosen'),
});

type FormValues = {
	answers: string[];
};

export const useGameForm = () => {
	const [userAnswers, setUserAnswers] = useState(['']);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const userData = useContext(UserContext);
	const game = useContext(GameContext);

	const question = game.question;
	const answers = game.all_words;
	const correctAnswers = game.good_words;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		const selectedAnswers = data.answers;
		setUserAnswers(selectedAnswers);
		setIsSubmitted(true);

		let numberOfMarkedCorrectAnswers = 0,
			numberOfMarkedIncorrectAnswers = 0;

		selectedAnswers.forEach((answer) => {
			if (correctAnswers.includes(answer)) {
				numberOfMarkedCorrectAnswers++;
			} else if (!correctAnswers.includes(answer)) {
				numberOfMarkedIncorrectAnswers++;
			}
		});

		const numberOfUnmarkedCorrectAnswers =
			correctAnswers.length - numberOfMarkedCorrectAnswers;

		const points =
			numberOfMarkedCorrectAnswers * 2 -
			(numberOfMarkedIncorrectAnswers + numberOfUnmarkedCorrectAnswers);

		userData.setScore(points);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		userAnswers,
		isSubmitted,
		question: { question, answers, correctAnswers },
		isLoading: game.isLoading,
	};
};
