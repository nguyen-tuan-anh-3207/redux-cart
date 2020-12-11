import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data? data: [];
const cart= (state = initialState, action) =>{
    var {product, quantity} = action;
    var index = -1;
    switch(action.type) {
        case types.ADD_TO_CART:
            index  = state.findIndex(x => x.product.id === product.id)
            if (index !== -1 ){
                state[index].quantity += quantity;
            }else {
                state.push({
                product,
                quantity
            })
            }
            //console.log(action)
            localStorage.setItem('CART', JSON.stringify(state) )
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index  = state.findIndex(x => x.product.id === product.id);
            if(index !==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state) )
            return [...state];
        default: 
            return [...state];
    }
    
};


export default cart;