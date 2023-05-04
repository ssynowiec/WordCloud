import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/home/app.tsx';
import { UserProvider } from './context/userContext/userContext.tsx';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageNotFound } from './pages/404/404.tsx';
import { Game } from './pages/game/game.tsx';
import { Result } from './pages/result/result.tsx';
import { ProtectedPage } from './components/protectedPage/protectedPage.tsx';
import { GameProvider } from './context/gameContext/gameContext.tsx';

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{
		path: '/play',
		element: (
			<ProtectedPage>
				<GameProvider>
					<Game />
				</GameProvider>
			</ProtectedPage>
		),
	},
	{
		path: '/result',
		element: (
			<ProtectedPage>
				<Result />
			</ProtectedPage>
		),
	},
	{ path: '*', element: <PageNotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</StrictMode>,
);
