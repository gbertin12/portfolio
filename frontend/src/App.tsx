import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';


// Pages
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Article from './pages/Article';
import NotFound from './pages/NotFound';

//Components
import NavBar from './components/Navbar';



import './App.css'


function App() {
  	useEffect(() => {
    fetch('http://localhost:5001/')
      	.then((res) => res.json())
		.then((data) => (data.message))
    	.catch((err) => console.error(err));
  	}, []);

  	return (
    	<>
			<NavBar />
      		<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/article/:id" element={<Article />} />
        		<Route path="/about" element={<About />} />
        		<Route path="/blog/:categorie" element={<Blog />} />
        		<Route path="/*" element={<NotFound />} />
      		</Routes>
    	</>
  	)
}

export default App
