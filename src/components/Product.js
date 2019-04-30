import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';

export default class Product extends React.Component{

	render(){
		const {id,title,img,price,inCart} = this.props.product;
		return(
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className = "card">
			<div className="img-container p-5" onClick={console.log(title)
			}>
			<Link to = "/Details">
			<img src={img} alt="product" className="card-img-top">
			</img>
			</Link>
			<button>
			<i class="fas fa-shopping-cart"></i>
			</button>
			</div>
		     {/* card footer */}
		     <div className = "card-footer d-flex.justify-content-between">
		     <p className = "align-self-center mb-0">
		     {title}
		     </p>

		     <h5 className = "text-blue font-italic mb-5 ">
		     <span className= "mr-0 text-monospace"  >Rs. </span>
		     {price}
		     </h5>
		     </div>
			</div>
			</ProductWrapper>
			

			)
	}
}

const ProductWrapper = styled.div`


`