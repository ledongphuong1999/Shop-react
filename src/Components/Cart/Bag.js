import React, { Component } from 'react'

export default class Bag extends Component {
    render() {
        return (
            <>
                <div className="close">
                    <i className="fa fa-close icon-close" />
                </div>
                <div className="bag text-center">
                    <i className="fa fa-shopping-bag" /><span className="num">({this.props.cart.length})</span>
                </div>
            </>
        )
    }
}
