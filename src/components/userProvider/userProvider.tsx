import { createContext, ReactNode, useState } from 'react';

type UserProviderProps = {
	children: ReactNode;
};

export const UserContext = createContext<{
	user: string | null;
	setUser: (username: string) => void;
}>({
	user: null,
	setUser: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
