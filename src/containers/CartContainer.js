import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {actDeleteProductInCart,actChangeMessage, actUpdateProductInCart} from '../actions/index'
//quản lí logic
class CartContainer extends Component {
    render() { 
        var {cart} = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
    )}

    showCartItem = (cart)=>{
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length>0){
            result = cart.map((item, index)=> 
                    <CartItem
                        key = {index}
                        total = {item.product.price*item.quantity} //tính tổng tiền của từng sản phẩm
                        item = {item}
                        onDeleteProductInCart = {this.props.onDeleteProductInCart}
                        onChangeMessage ={this.props.onChangeMessage}
                        onUpdateProductInCart = {this.props.onUpdateProductInCart}
                    />
            )
        }
        return result;

    }
    //chuyền vào children
    showTotalAmount =(cart) =>{
        var result = null;
        if(cart.length >0) {
            result = <CartResult totals = {this.TotalAmount(cart)}/>
        }
        return result
    }

    //tính tổng số tiền của tất cả sản phẩm
    TotalAmount = (cart) =>{
    var totals = 0;
    if(cart.length >0) {
      for( var i =0; i<cart.length; i++){
        totals += cart[i].product.price * cart[i].quantity;
      }
    }
    return totals;
  }
    
}

//proptypes
CartContainer.propTypes ={
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id: PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        }),
        quantity: PropTypes.number.isRequired,
    }),).isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage: (message) =>{ //thay đổi mesage
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart : (product, quantity)=>{ 
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);