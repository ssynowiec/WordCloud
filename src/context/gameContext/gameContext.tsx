import { createContext, type ReactNode, useEffect, useState } from 'react';

interface GameContextProps {
	question: string;
	all_words: string[];
	good_words: string[];
}

export const GameContext = createContext<GameContextProps>({
	question: '',
	all_words: [],
	good_words: [],
});

type GameProviderProps = {
	children: ReactNode;
};

export const GameProvider = ({ children }: GameProviderProps) => {
	const [question, setQuestion] = useState<GameContextProps>({
		question: '',
		all_words: [],
		good_words: [],
	});

	useEffect(() => {
		let ignore = false;
		const fetchData = async () => {
			try {
				const data = await fetch(
					'https://my-json-server.typicode.com/ssynowiec/WordCloud-api/questions',
				);
				const response = await data.json();
				const randomIndex = Math.floor(Math.random() * response.length);
				const questionData = response[randomIndex];
				if (!ignore) {
					setQuestion(questionData);
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
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
