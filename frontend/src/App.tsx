import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

import Navbar from './components/Navbar';
import BurgerPlayNavBar from './components/BurgerPlayNavBar';


import './App.css'


function App() {

  	useEffect(() => {
    fetch('http://localhost:5001/')
      	.then((res) => res.json())
    	.catch((err) => console.error(err));
  	}, []);

	const [isNavVisible, setIsNavVisible] = useState(false);

  	return (
    	<>
			<BurgerPlayNavBar isNavVisible={isNavVisible} toggleNav={() => setIsNavVisible(!isNavVisible)} />
			{isNavVisible && <Navbar />}
      		<Routes>
        		<Route path="/" element={<Home />} />
        		<Route path="/about" element={<About />} />
        		<Route path="/blog" element={<Blog />} />
        		<Route path="*" element={<div>404 Not Found</div>} />
      		</Routes>
    	</>
  	)
}

export default App
