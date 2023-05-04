import { createContext, ReactNode, useEffect, useState } from 'react';

type UserProviderProps = {
	children: ReactNode;
};

interface UserContextProps {
	user: string;
	score: number;
	setUser: (username: string) => void;
	setScore: (score: number) => void;
}

export const UserContext = createContext<UserContextProps>({
	user: '',
	score: 0,
	setUser: () => '',
	setScore: () => 0,
});

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<string>(
		localStorage.getItem('username') || '',
	);
	const [score, setScore] = useState<number>(0);

	useEffect(() => {
		localStorage.setItem('username', user);
	}, [user]);

	return (
		<UserContext.Provider value={{ user, score, setUser, setScore }}>
			{children}
		</UserContext.Provider>
	);
};
