import { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { AuthContext } from '../context';
import PageNotFound from '../pages/404';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router';

export default function AppRouter() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	return isAuth ? (
		<Routes>
			{privateRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.component} />
			))}
			<Route path='*' element={<Login />} />
		</Routes>
	);
}
