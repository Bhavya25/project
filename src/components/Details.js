import React from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends React.Component{
	render(){
		return(
			<ProductConsumer>
			{value =>{
				const {id, title, img, price, booktype,author,info,count,total} = value.detailedProducts;
				console.log(value.detailedProducts.title);
				return(
					<div className = "container py-5">
				    {/* title*/}
				    <div className = "row">
				    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
				    <h1> {title}</h1>
				    </div>
				    </div>
					{/*end  title*/}
					{/* Product Info */}
					<div className = "row">
					<div className="col-10 mx-auto col-md-6 my-3">
					<img src = {img} className = "img-fluid" alt="product" />
					</div>
					{/* Product Image */}
					<div className="col-10 mx-auto col-md6 my-3 text-capitalize">
					<h2> Name : {title}</h2>
					<h4 className="text-title  mt-3 mb-2 text-capitalize">
					Author : <span >{author}</span>
					</h4>
					<h4 className="text-blue">
					<strong>
					price : <span>Rs.</span>
					{price}
					</strong>
					</h4>
					<p className ="text-capitalize font-weight-bold mt-3 mb-0">
					About the product:
					</p>
					<p>{info}</p>
					<div>
					<Link to = "/">
					<ButtonContainer>back to products </ButtonContainer>
					</Link>
					<Link to = "/Cart">
					<ButtonContainer>Add to Cart </ButtonContainer>
					</Link>

					</div>
					</div>
					</div>
				    </div>
					);

			}}
			</ProductConsumer>
			);
	}
}