import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../favicon.ico';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends React.Component{
	render(){

	 return(
		<NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
		{/*
		https://www.iconfinder.com/icons/1228/bookcase_books_school_icon Creative Commons (Attribution 3.0 Unported);
		https://www.iconfinder.com/Makoto_msk */}

		<Link to = '/'>
		<img src = {logo} alt= "Logo" className =  "navbar-brand" width = "40" />

		</Link>
        <ul className = "navbar-nav align-items-center">
        <li className = "nav-item ml-5">
        <Link to = "/" className = "nav-link">
        Products
        </Link>
        </li>
        </ul>
        <Link to='/cart' className = "ml-auto">
        <ButtonContainer>
        <span className = "mr-2">
        <i class="fas fa-shopping-cart"></i>
        </span>
        my cart
        </ButtonContainer>
        </Link>
		</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
        color: var(--mainWhite) !important;
        fomt-size:1.3rem;
        text-transform: capitalize;
}

`;



