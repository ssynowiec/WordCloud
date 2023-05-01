import { Input } from '../input/input.tsx';
import { Button } from '../button/button.tsx';
import { useUserForm } from './useUserForm.tsx';
import { ErrorMessage } from '../errorMessage/errorMessage.tsx';

export const UserForm = () => {
	const { register, handleSubmit, onSubmit, errors } = useUserForm();

	return (
		<form
			action='/play'
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center justify-center'
		>
			<Input
				placeholder='Enter your nickname here...'
				{...register('username', { required: true })}
				isError={Boolean(errors.username)}
			/>
			{errors.username && <ErrorMessage message={errors.username.message} />}
			<Button type='submit'>play</Button>
		</form>
	);
};
