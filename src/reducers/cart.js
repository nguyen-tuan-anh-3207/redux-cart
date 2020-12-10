import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var innitialState =  [
    {
        product:{
            id: 1,
            name : 'Iphone 7 Plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg',
            description : 'Sản phẩm do apple sản xuất',
            price: 500,
            inventory: 10,
            rating: 3
        },
        quantity : 6
    },
    {
        product:{
            id: 3,
            name : 'oppo 7 ',
            image: 'https://cf.shopee.com.my/file/acda6e55eaf036240097586785297bc8',
            description : 'Sản phẩm do oppo sản xuất',
            price: 550,
            inventory: 20,
            rating: 5
                },
        quantity : 3
    }
];

const cart= (state = innitialState, action) =>{
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: 
            return [...state];
    }
};


export default cart;