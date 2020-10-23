import React, { Component } from 'react'

export default class IconCart extends Component {
    render() {
        return (
            <div className="col-1 text-center icon-cart">
                <i className="fa fa-shopping-cart" /><span className="number">({this.props.cart.length})</span>
            </div>
        )
    }
}
