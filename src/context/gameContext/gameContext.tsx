import { createContext, type ReactNode } from 'react';
import { data } from '../../api/words.ts';

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
	const questions = data;

	const randomIndex = Math.floor(Math.random() * questions.length);
	const questionData = questions[randomIndex];
	const question = questionData.question;
	const answers = questionData.all_words;
	const correctAnswers = questionData.good_words;

	return (
		<GameContext.Provider
			value={{ question, all_words: answers, good_words: correctAnswers }}
		>
			{children}
		</GameContext.Provider>
	);
};
