import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context';

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [authLoading, setAuthLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
		setAuthLoading(false);
	}, []);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, authLoading }}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
