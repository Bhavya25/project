import React from 'react';
import {storeProducts, detailedProducts} from './data'

const ProductContext = React.createContext();

//Provider

//Consumer
 class ProductProvider extends React.Component{
		state = {
			products :[],
			cart : [],
			detailedProducts: detailedProducts,
			cartSubTotal:0,
			cartTax:0,
			cartTotal:0
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

		increment =(id) =>{
			const product = this.state.cart.find(item => item.id === id);
			const index = this.state.cart.indexOf(product);
			product.count = product.count+1;
			product.total = product.price*product.count;
			this.state.cartSubTotal=this.state.cartSubTotal + product.price;
			this.state.cartTax = (this.state.cartSubTotal*10)/100;
			this.state.cartTotal= this.state.cartSubTotal + this.state.cartTax;

			this.setState(()=>{
				return {cart : [...this.state.cart]}
			})
		}

		decrement = (id)=>{
			const product = this.state.cart.find(item => item.id === id);
			const index = this.state.cart.indexOf(product);
			product.count = product.count-1;
			product.total = product.price*product.count;
			this.state.cartSubTotal = this.state.cartSubTotal -product.price;
				this.state.cartTax = (this.state.cartSubTotal*10)/100;
			this.state.cartTotal= this.state.cartSubTotal + this.state.cartTax;

			if(product.count == 0){
				this.removeItem(id);
			}

			this.setState(()=>{
				return {cart : [...this.state.cart], cartSubTotal: this.state.cartSubTotal}
			})
		}

		removeItem = (id)=>{
			const product = this.state.cart.find(item => item.id === id);
			const index = this.state.cart.indexOf(product);
			const price = product.price;
			const quantity = product.count;
			this.state.cartSubTotal = this.state.cartSubTotal- (price*quantity);
			this.state.cartTax = (this.state.cartSubTotal*10)/100;
			this.state.cartTotal= this.state.cartSubTotal + this.state.cartTax;

			if(index != -1){
				this.state.cart.splice(index,1);
				this.setState(() =>{
					return {cart : [...this.state.cart], cartSubTotal: this.state.cartSubTotal}
				})
			}
		}

		clearCart = () =>{
			this.state.cart.splice(0,this.state.cart.length);
			this.state.cartSubTotal = 0;
				this.state.cartTax = 0;
			this.state.cartTotal= 0;

			this.setState(()=>{
				return {cart:[...this.state.cart], cartSubTotal: this.state.cartSubTotal}
			})
		}

		addToCart = (id) =>{
			  console.log("hello cart");
			  let tempProducts = [...this.state.products];
			  const index = tempProducts.indexOf(this.getItem(id));
			

			  const product = tempProducts[index];
			  product.count = product.count+1;
			  const price = product.price ;
			  product.total =product.price*product.count;
			  this.state.cartSubTotal = this.state.cartSubTotal+price;
			  this.state.cartTax = (this.state.cartSubTotal*10)/100;
			this.state.cartTotal= this.state.cartSubTotal + this.state.cartTax;

			  if(product.inCart == false){
			  	product.inCart = true;
			  	this.setState(() =>{
			  	return {products : tempProducts, cart: [...this.state.cart,product], cartSubTotal:this.state.cartSubTotal };
			  	},()=>{console.log(this.state);
			  	
			  });
			  }else{

			     const productCart = this.state.cart.find(item => item.id === id);
			     const index = this.state.cart.indexOf(productCart);
			     this.state.cart[index] = product;


                 
                  
                  this.setState(() =>{
                  	return {products : tempProducts, cart :[...this.state.cart] , cartSubTotal:this.state.cartSubTotal};
                   },() =>{console.log(this.state);
                   });
              }
			  

			  
			
			};
			
			

		render(){

		return(
			<ProductContext.Provider value ={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
				increment:this.increment,
				decrement:this.decrement,
				removeItem:this.removeItem,
				clearCart:this.clearCart,

			}}>
				{this.props.children}
			</ProductContext.Provider>

			)
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};