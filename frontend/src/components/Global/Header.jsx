import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={`container ${styles.header}`}>
				<Link to=''>
				<h1>Elite</h1>
				</Link>
				<nav>
					<Link to='/login'>Login</Link>
					<Link to='/sobre'>Sobre</Link>
					<Link to='/funcionalidades'>Funcionalidades</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
