var innitialState = [{
    id: 1,
    name : 'Iphone 7 Plus',
    image: 'https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-blue-600x600-thumb-hen-gio.jpg',
    description : 'Sản phẩm do apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 3
},
{
    id: 2,
    name : 'Samsung 7 ',
    image: 'https://cdn.nguyenkimmall.com/images/detailed/630/10044938-dien-thoai-samsung-sm-n770f-ds-128gb-bac-1.jpg',
    description : 'Sản phẩm do samsung sản xuất',
    price: 400,
    inventory: 15,
    rating: 4
},
{
    id: 3,
    name : 'oppo 7 ',
    image: 'https://cf.shopee.com.my/file/acda6e55eaf036240097586785297bc8',
    description : 'Sản phẩm do oppo sản xuất',
    price: 550,
    inventory: 20,
    rating: 5
}];

const products= (state = innitialState, action) =>{
    switch(action.type) {
        default: 
            return [...state];
    }
};


export default products;