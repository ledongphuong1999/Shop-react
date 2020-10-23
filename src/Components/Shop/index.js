import React, { Component } from 'react'
import IconCart from './IconCart'
import Products from './Products'
import Sizes from './Sizes'

export default class Shop extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sizes  listSize  = {this.props.listSize}
                            sizeFilter={(size_id) => this.props.sizeFilter(size_id)}
                    />
                    <Products listProduct = {this.props.listProduct}
                               
                                sortGiamDan= {(arr) => this.props.sortGiamDan(arr)}
                                sortTangDan= {(arr) => this.props.sortTangDan(arr)}
                                sortNewest = {(arr) => this.props.sortNewest(arr)} 
                                addCart    = {(id) => this.props.addCart(id)}
                    />
                    <IconCart cart = {this.props.cart}/>
                </div>
            </div>
        )
    }
}
