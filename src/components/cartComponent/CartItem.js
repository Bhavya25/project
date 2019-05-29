import React from 'react';

export default function CartItem({item, value}){
	console.log(value);
	const {id, title,  img, price, total, count} = item;
	const {increment, decrement,removeItem} = value;
	
	return(
		<div className = "container-fluid text-center d-none d-lg-block" >
		
		<div className = "row">

		<div className="col-10 mx-auto col-lg-2">
		<img src = {img} alt= "Logo" className =  "navbar-brand" width = "75" >
			</img>
		</div>
			
	
		<div className="col-10 mx-auto col-lg-2">
		<p className = "text-uppercase">{title}</p>
		</div>
		

		
		<div className="col-10 mx-auto col-lg-2">
		<p className = "text-uppercase">{price}</p>
		</div>
		
		<div className="col-10 mx-auto col-lg-2 ">
		<div className="d-flex-justify-content-center">
		</div>
		<span className="button btn-black mx-1" onClick={()=>decrement(id)}>-</span>
		<span className = "text-uppercase">{count}</span>
		<span className="button btn-black mx-1" onClick={()=>increment(id)}>+</span>
		</div>
		
	
		<div className="col-10 mx-auto col-lg-2">
        <i class="fas fa-trash-alt" onClick={() => removeItem(id)}></i>
		</div>
		

		<div className="col-10 mx-auto col-lg-2">
		<p className = "text-uppercase">Rs.{total} </p>
		</div>
	   

	   </div>
	   </div>

		);
}