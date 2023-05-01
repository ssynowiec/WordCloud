import { createContext, ReactNode, useState } from 'react';

type UserProviderProps = {
	children: ReactNode;
};

interface UserContextProps {
	user: string | null;
	score: number;
	setUser: (username: string | null) => void;
	setScore: (score: number) => void;
}

export const UserContext = createContext<UserContextProps>({
	user: null,
	score: 0,
	setUser: () => {},
	setScore: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<string | null>(null);
	const [score, setScore] = useState<number>(0);

	return (
		<UserContext.Provider value={{ user, score, setUser, setScore }}>
			{children}
		</UserContext.Provider>
	);
};
