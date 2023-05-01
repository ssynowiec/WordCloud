import { createContext, ReactNode, useState } from 'react';

type UserProviderProps = {
	children: ReactNode;
};

interface UserContextProps {
	user: string | null;
	setUser: (username: string | null) => void;
}

export const UserContext = createContext<UserContextProps>({
	user: null,
	setUser: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<string | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
