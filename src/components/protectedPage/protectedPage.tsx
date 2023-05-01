import { ReactNode, useContext, useEffect } from 'react';
import { UserContext } from '../userProvider/userProvider.tsx';
import { useNavigate } from 'react-router-dom';

type ProtectedPageProps = {
	children: ReactNode;
};

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			return navigate('/');
		}
	}, [navigate, user]);

	return <>{children}</>;
};
