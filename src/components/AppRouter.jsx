import { Route, Routes } from 'react-router'
import PageNotFound from '../pages/404'
import { routes } from '../router'

export default function AppRouter() {
	return (
		<Routes>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={route.component}
				/>
			))}
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	)
}
