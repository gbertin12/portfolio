import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound';
import NavBar from './components/Navbar';



import './App.css'


function App() {

  	useEffect(() => {
    fetch('http://localhost:5001/')
      	.then((res) => res.json())
		.then((data) => setMessage(data.message))
    	.catch((err) => console.error(err));
  	}, []);

  	return (
    	<>
			<NavBar />
      		<Routes>
				<Route path="/" element={<Home />} />
        		<Route path="/about" element={<About />} />
        		<Route path="/blog" element={<Blog />} />
        		<Route path="/*" element={<NotFound />} />
      		</Routes>
    	</>
  	)
}

export default App
