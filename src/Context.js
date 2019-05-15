import React from 'react';
import {storeProducts, detailedProducts} from './data'

const ProductContext = React.createContext();

//Provider

//Consumer
 class ProductProvider extends React.Component{
		state = {
			products :[],
			cart : [],
			detailedProducts: detailedProducts
		};
		componentDidMount(){
			this.setProducts();
		}

		setProducts =()=>{
			let tempProducts =[];
			storeProducts.forEach(item =>{
				const singleItem = {...item};
				tempProducts = [...tempProducts,singleItem];
			});
		   this.setState(() =>{
			return {products :tempProducts}
		});
};

		getItem = (id) =>{
			const product = this.state.products.find(item => item.id === id);
			return product;
		}
		handleDetail = (id) =>{
			const product = this.getItem(id);
			this.setState(() =>{
				return {detailedProducts : product};
			})
			}

			addToCart = (id) =>{
			 console.log("hello cart");
			  let tempProducts = [...this.state.products];
			  const index = tempProducts.indexOf(this.getItem(id));
			
				const product = tempProducts[index];
			  product.inCart = true;
			  product.count = product.count+1;
			  const price = product.price ;
			  product.total = price + product.total;

			  this.setState(() =>{
			  	return {products : tempProducts, cart: [...this.state.cart,product] };
			  	},()=>{console.log(this.state);
			  	
			  });
			
			};
			
			

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