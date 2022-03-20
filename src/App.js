import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import MainWrapper from './components/MainWrapper'
import Contact from './pages/Contact'
import BookTable from './pages/BookTable'
import Footer from './components/Footer'

function App() {
	const { pathname } = useLocation()
	return (
		<>
			{pathname === '/' && <Hero />}
			<Navigation />
			<MainWrapper>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/booktable' element={<BookTable />} />
				</Routes>
				<Footer />
			</MainWrapper>
		</>
	)
}

export default App
