type ErrorMessageProps = {
	message?: string;
};

export const ErrorMessage = ({
	message = 'SOMETHING WENT WRONG',
}: ErrorMessageProps) => {
	return <p className='text-red-500'>{message}</p>;
};
