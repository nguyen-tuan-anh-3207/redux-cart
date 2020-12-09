import React, {Component} from 'react';
import Product from './Product';


class Products extends Component {
  render(){
  return (
    <div>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                    <Product/>
                    <Product/>
                    <Product/>
                    </div>
                </section>
            </div>
  );
}}

export default Products;
