type ErrorMessageProps = {
	message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return <p className='text-red-500'>{message}</p>;
};
