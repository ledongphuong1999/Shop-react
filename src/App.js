import React, { Component } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Shop from './Components/Shop';
import Data from './data/Products.json';
import Sizes from './data/Sizes.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSize: Sizes,
      listProduct: Data,
      tempList: Data,
      sizeFilter: [],
      cart: [],
    }
  }

  sortTangDan = (arr) => {
    var PriceTangDan = arr.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({
      tempList: PriceTangDan
    })
  }

  sortGiamDan = (arr) => {
    var PriceGiamDan = arr.sort(function (a, b) {
      return b.price - a.price;
    });
    this.setState({
      tempList: PriceGiamDan
    })
  }

  sortNewest = (arr) => {
    var IdGiamDan = arr.sort(function (a, b) {
      return b.id - a.id;
    });
    this.setState({
      tempList: IdGiamDan
    })
  }

  sizeFilter = (size_id) => {
    let tmpArr = this.state.sizeFilter;
    var x = tmpArr.find(function (i) {
      return i === size_id;
    })
    if (x == null) {
      tmpArr.push(size_id);
    }
    else {
      tmpArr = tmpArr.filter(i => i !== size_id);
    }
    this.setState({
      sizeFilter: tmpArr
    })
    this.productsFilter(tmpArr);
  }
  getProductBySizeId = (id) => {
    return this.state.listProduct.filter(product => product.size_id === id);
  }

  productsFilter = (arrSize) => {
    var tmpArr = [];
    if (arrSize.length > 0) {
      for (var size of arrSize) {
        var products = this.getProductBySizeId(size);
        for (var product of products) {
          tmpArr.push(product);
        }
      }
    }
    else {
      tmpArr = this.state.listProduct;
    }

    this.setState({
      tempList: tmpArr
    })
  }

  addCart = (id) => {
    var cart = this.state.cart;
    var x = cart.find(function (item) {
      return item.id === id;
    })
    var product = {};
    if (x == null) {
      product = this.state.listProduct.find(item => item.id === id);
      product['qty'] = 1;
      cart.push(product);
    }
    else{
      for(var item of cart) {
        if(item.id === id) {
          item.qty += 1;
        }
      }
    }

    this.setState({
      cart: cart
    })
    console.log(this.state.cart);
  }

  deleteCart = (id) => {
    var cart = this.state.cart.filter(item => item.id !== id);
    this.setState({
      cart: cart
    })
  }

  render() {
    return (
      <>
        <Shop listProduct={this.state.tempList}
          listSize={this.state.listSize}
          sortTangDan={(arr) => this.sortTangDan(arr)}
          sortGiamDan={(arr) => this.sortGiamDan(arr)}
          sortNewest={(arr) => this.sortNewest(arr)}
          sizeFilter={(size_id) => this.sizeFilter(size_id)}
          addCart={(id) => this.addCart(id)}
          cart={this.state.cart}
        />
        <Cart
          cart={this.state.cart}
          listSize={this.state.listSize}
          deleteCart = {(id) => this.deleteCart(id)}
        />
      </>
    );
  }
}

export default App;