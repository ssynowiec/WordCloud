import { createContext, type ReactNode, useEffect, useState } from 'react';

type QuestionType = {
	question: string;
	all_words: string[];
	good_words: string[];
};

type GameContextProps = {
	isLoading: boolean;
} & QuestionType;

export const GameContext = createContext<GameContextProps>({
	question: '',
	all_words: [],
	good_words: [],
	isLoading: false,
});

type GameProviderProps = {
	children: ReactNode;
};

export const GameProvider = ({ children }: GameProviderProps) => {
	const [question, setQuestion] = useState<QuestionType>({
		question: '',
		all_words: [],
		good_words: [],
	});

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let ignore = false;
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await fetch(
					'https://my-json-server.typicode.com/ssynowiec/WordCloud-api/questions',
				);
				const response = await data.json();
				const randomIndex = Math.floor(Math.random() * response.length);
				const questionData = response[randomIndex];
				if (!ignore) {
					setQuestion(questionData);
					setIsLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();

		return () => {
			ignore = true;
		};
	}, []);

	const questionContent = question.question;
	const answers = question.all_words;
	const correctAnswers = question.good_words;

	return (
		<GameContext.Provider
			value={{
				question: questionContent,
				all_words: answers,
				good_words: correctAnswers,
				isLoading,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
