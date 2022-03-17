import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Wrapper from './components/Wrapper'
import Contact from './pages/Contact'

function App() {
	const { pathname } = useLocation()
	return (
		<>
			{pathname === '/' && <Hero />}
			<Navigation />
			<Wrapper>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Wrapper>
		</>
	)
}

export default App
