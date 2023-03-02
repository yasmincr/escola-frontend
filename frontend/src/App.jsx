// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Rotas
import { Routes, Route } from 'react-router-dom';

// Contexto
import { UserStorage } from './context/UserContext';

// Globais
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';

// Paginas
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

// Helper
import ProtectedRoute from './helpers/ProtectedRoute';

// CSS
import './styles/global.css';
import FunctionPage from './pages/FunctionsPage';

function App() {
	return (
		<UserStorage>
			<div className='page'>
				<Header />
				<div className='content'>
					<Routes>
						<Route
							path=''
							element={<HomePage />}
						/>
						<Route
							path='sobre'
							element={<LandingPage />}
						/>
							<Route
							path='funcionalidades'
							element={<FunctionPage />}
						/>
						<Route
							path='login/*'
							element={<LoginPage />}
						/>
						<Route
							path='dashboard/*'
							element={
								<ProtectedRoute>
									<DashboardPage />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</UserStorage>
	);
}

export default App;
