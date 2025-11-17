import { useContext } from 'react';
import CustomButton from '../components/UI/button/CustomButton';
import CustomInput from '../components/UI/input/CustomInput';
import { AuthContext } from '../context';

export default function Login() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const login = event => {
		event.preventDefault();
		setIsAuth(true);
	};
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={login}>
				<CustomInput type='text' placeholder='Login'></CustomInput>
				<CustomInput type='password' placeholder='Password'></CustomInput>
				<CustomButton>Login</CustomButton>
			</form>
		</div>
	);
}
