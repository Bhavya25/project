import React from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import {ProductConsumer} from '../../Context';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends React.Component{

	render(){
		return(
		
			<ProductConsumer>
			{
			value =>{
				const {cart} = value;
			if(cart.length > 0){
				return(

						<React.Fragment>
						<Title name="your" title="cart" />
						<CartColumn />
						<CartList value = {value} />
						<CartTotal value={value} history = {this.props.history}/>

						</React.Fragment>
					);
			
			}else{
				return <EmptyCart />
			}	
			}
			}
			</ProductConsumer>
			);
	}
} 