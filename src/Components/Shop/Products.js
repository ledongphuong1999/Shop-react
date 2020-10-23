import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        var listProduct = this.props.listProduct.map(product => {
            return (<Item key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} 
                            addCart  ={(id) => this.props.addCart(id)}
                    />);
        });

        return (
            <div className="col-9">
                <div className="row row2">
                    <Action sortGiamDan= {(arr) => this.props.sortGiamDan(arr)}
                            sortTangDan= {(arr) => this.props.sortTangDan(arr)}
                            sortNewest  = {(arr) => this.props.sortNewest(arr)} 
                            listProduct = {this.props.listProduct}
                    />
                    {listProduct}
                </div>
            </div>
        )
    }
}


class Item extends Component {
    addCart = (e, id) => {
        e.preventDefault();
        this.props.addCart(id)
    }
    render() {
        return (
            <div className="col-3">
                <div className="card">
                    <img className="anh" src={this.props.image} alt="anh dai dien" />
                    <div className="card-body">
                        <p className="card-text text-center name">{this.props.name}</p>
                        <div className="gach" />
                        <p className="card-text text-center price">$ <b className="to">{this.props.price}</b>.00</p>
                        <a href="http://www.google.com" onClick={(e, id) => this.addCart(e, this.props.id)} className="btn btn-block btn-primary add-cart">Add to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

class Action extends Component {
    isChange = (e) => {
        var value = e.target.value;
        if(value === '1'){
            this.props.sortTangDan(this.props.listProduct);
        }
        else if(value === '2'){
            this.props.sortGiamDan(this.props.listProduct);
        }
        else if(value === '3'){
            this.props.sortNewest(this.props.listProduct);
        }
    }

    render() {
        return (
            <>
                <div className="col-10 found">{this.props.listProduct.length} product(s) found</div>
                <div className="col-2 selector">
                    <div className="form-group">
                        <select className="form-control" name='sort-price' onChange={(e) => this.isChange(e)}>
                            <option >Order By</option>
                            <option value='3'>Mới nhất</option>
                            <option value='1'>Thấp tới cao</option>
                            <option value='2'>Cao tới thấp</option>
                        </select>
                    </div>
                </div>
            </>
        );
    }
}
