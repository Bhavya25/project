import React from 'react';
import {storeProducts} from './data'

const ProductContext = React.createContext();

//Provider

//Consumer
 class ProductProvider extends React.Component{
		state = {
			products : storeProducts,
		};

		handleDetail = () =>{
				console.log('Hello from Details');
			}

			addToCart = () =>{
				console.log('hello from Cart');
			}

		render(){

		return(
			<ProductContext.Provider value ={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
			}}>
				{this.props.children}
			</ProductContext.Provider>

			)
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};