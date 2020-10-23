import React, { Component } from 'react'
import Bag from './Bag'
import ProductsChoosed from './ProductsChoosed'

export default class Cart extends Component {
    render() {
        return (
            <div className="cart  dichphai">
                <Bag cart={this.props.cart}
                />
                <ProductsChoosed cart={this.props.cart} 
                                listSize={this.props.listSize}
                                deleteCart = {(id) => this.props.deleteCart(id)}
                />
            </div>
        )
    }
}
