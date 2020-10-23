import React, { Component } from 'react'

export default class ProductsChoosed extends Component {
    getSizeById = (id) => {
        var size =  this.props.listSize.find(item => item.id === id);
        return size.name;
    }
    render() {
        var listProduct = this.props.cart.map(item => {
            return (
                <Item key = {item.id} id = {item.id} name = {item.name} image = {item.image} price = {item.price} qty = {item.qty} size = {this.getSizeById(item.size_id)}
                        deleteCart = {(id) => this.props.deleteCart(id)}
                />
            );
        })
        return (
            <div className="products">
                {listProduct}
            </div>
        )
    }
}

class Item extends Component {
    delete = (id) => {
        this.props.deleteCart(id);
    }
    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid img-product-cart" src={this.props.image} alt="anh dai dien" />
                    </div>
                    <div className="col-9">
                        <div className="card-block">
                            <i className="fa fa-close delete-product-cart" onClick = {(id) => this.delete(this.props.id)}/>
                            <p className="product-name">{this.props.name}</p>
                            <span className="product-size">Size: {this.props.size}</span> <span className="product-price">$ {this.props.price * this.props.qty}.00</span>
                            <p className="product-quality">Số lượng: {this.props.qty}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
