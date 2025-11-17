import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../context';
import CustomButton from '../button/CustomButton';

export default function Navbar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	return (
		<div className='navbar'>
			{isAuth ? (
				<CustomButton
					onClick={() => {
						setIsAuth(false);
					}}
				>
					Login
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
