import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/userContext.tsx';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = yup.object().shape({
	username: yup.string().required('Please enter your nickname'),
});

type FormValues = {
	username: string;
};

export const useUserForm = () => {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(formSchema),
	});
	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		setUser(data.username);
		navigate('/play');
	};

	return { register, handleSubmit, onSubmit, errors };
};
