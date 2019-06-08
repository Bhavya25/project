import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/cartComponent/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Payment from './components/Payment';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Switch >
      <Route exact path="/" component = {ProductList}></Route>
      <Route path= "/details" component = {Details}></Route>
      <Route path = "/cart" component = {Cart}></Route>
      <Route path = "/payment" component={Payment}></Route>
      <Route component = {Default} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
