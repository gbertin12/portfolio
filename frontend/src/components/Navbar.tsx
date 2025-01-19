import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav style={styles.nav}>
      	<ul style={styles.ul}>
      	  	<li style={styles.li}>
      	    	<Link to="/" style={styles.link}>Accueil</Link>
      	  	</li>
      	  	<li style={styles.li}>
      	    	<Link to="/about" style={styles.link}>À propos</Link>
      	  	</li>
      	  	<li style={styles.li}>
      	    	<Link to="/Blog" style={styles.link}>Blog</Link>
      		</li>
				<li style={styles.li}>
      	    	<Link to="/contact" style={styles.link}>Contact</Link>
      	  	</li>
      	</ul>
    </nav>
  );
}

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#282c34',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  li: {
    fontSize: '1.2rem',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
  },
};

export default Navbar;