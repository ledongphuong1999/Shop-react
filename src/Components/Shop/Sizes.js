import React, { Component } from 'react'

export default class Sizes extends Component {
    render() {
        var listSize = this.props.listSize.map(size => {
            return (
                <Item key={size.id} id={size.id} name={size.name} 
                        sizeFilter = {(size_id) => {this.props.sizeFilter(size_id)}}
                />
            )
        })

        return (
            <div className="col-2">
                <p className="sizes">Sizes</p>
                <ul>
                    {listSize}
                </ul>
            </div>
        )
    }
}

class Item extends Component {
    isClick = (id) => {
        this.props.sizeFilter(id)
    }
    render() {
        return (
            <li className="_1size" onClick={() => this.isClick(this.props.id)}>{this.props.name}</li>
        )
    }
}
