import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../favicon.ico';

export default class Navbar extends React.Component{
	render(){

	 return(
		<nav className = "navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
		{/*
		https://www.iconfinder.com/icons/1228/bookcase_books_school_icon Creative Commons (Attribution 3.0 Unported);
		https://www.iconfinder.com/Makoto_msk */}

		<Link to = '/'>
		<img src = {logo} alt= "Logo" className =  "navbar-brand" />

		</Link>
        <ul className = "navbar-nav align-items-center">
        <li className = "nav-item ml-5">
        <Link to = "/" className = "nav-link">
        Products
        </Link>
        </li>
        </ul>
        <Link to='/cart' className = "ml-auto">
        <button>
        <i class="fas fa-shopping-cart"></i>
        My Cart
        </button>
        </Link>
		</nav>
		)
	}
}