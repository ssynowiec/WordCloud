import { ReactNode, useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext/userContext.tsx';
import { useNavigate } from 'react-router-dom';

type ProtectedPageProps = {
	children: ReactNode;
};

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user || user === 'null') {
			return navigate('/');
		}
	}, [navigate, user]);

	return <>{children}</>;
};
