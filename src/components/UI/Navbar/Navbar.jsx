import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../context';
import CustomButton from '../button/CustomButton';

export default function Navbar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	};

	return (
		<div className='navbar'>
			{isAuth ? (
				<CustomButton
					onClick={() => {
						logout;
					}}
				>
					Logout
				</CustomButton>
			) : (
				<div>Guest</div>
			)}

			<div className='navbar__links'>
				<Link to='/about'>About</Link>
				<Link to='/posts'>Posts</Link>
			</div>
		</div>
	);
}
