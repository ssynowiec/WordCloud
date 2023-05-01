import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { data } from '../../api/words.ts';

const formSchema = yup.object().shape({
	answers: yup.array().min(1).required('Please select at least one answer'),
});

type FormValues = {
	answers: string[];
};

const questions = data;

const randomIndex = Math.floor(Math.random() * questions.length);
const question = questions[randomIndex].question;
const answers = questions[randomIndex].all_words;
const correctAnswers = questions[randomIndex].good_words;

export const useGameForm = () => {
	const [userAnswers, setUserAnswers] = useState(['']);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [score, setScore] = useState(0);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSubmit = (data: FormValues) => {
		const selectedAnswers = data.answers;

		setUserAnswers(selectedAnswers);
		setIsSubmitted(true);

		let numberOfMarkedCorrectAnswers = 0,
			numberOfMarkedIncorrectAnswers = 0;

		console.log(selectedAnswers, correctAnswers);

		selectedAnswers.forEach((answer) => {
			console.log(answer, correctAnswers.includes(answer));
			if (correctAnswers.includes(answer)) {
				numberOfMarkedCorrectAnswers++;
			} else if (!correctAnswers.includes(answer)) {
				numberOfMarkedIncorrectAnswers++;
			}
		});

		console.log('Correct answers: ', numberOfMarkedCorrectAnswers);
		console.log('Incorrect answers: ', numberOfMarkedIncorrectAnswers);
		console.log(
			'Unmarked correct answers: ',
			correctAnswers.length - numberOfMarkedCorrectAnswers,
		);

		const numberOfUnmarkedCorrectAnswers =
			correctAnswers.length - numberOfMarkedCorrectAnswers;

		const points =
			numberOfMarkedCorrectAnswers * 2 -
			(numberOfMarkedIncorrectAnswers + numberOfUnmarkedCorrectAnswers);

		console.log('Points: ', points);

		setScore(points);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		userAnswers,
		isSubmitted,
		question: { question, answers, correctAnswers },
		score,
	};
};