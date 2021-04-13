//import { countres } from "../MainPage/countres.json"

import "./style.css"


// function notEmpty() {
// if (param.quantity > 0) {
//     const productList = countres.map(country =>
//         <div className="cartProduct-container"> 

//             <div className="cartProduct">
//                 <div className={['cartProduct', country.name.toLowerCase()].join(' ')}></div>
//                 <div className="product-title">
//                     {country.name}
//                 </div>
//             </div>

//             <div className="cart-property">
//                 <p>-</p>
//                 <p>{country.dayCost * param.quantity}</p>
//                 <p>+</p>
//             </div>

//         </div>
//     );
// }

// }

// TODO: если корзмна не пустая создавать массив с элементами по принципу (productList в src\components\MainPage\index.jsx)
function CartPage(props) {
    console.log('props', props);

    const addInCart = (id) => {
        props.onAddToCart(id);
        console.log(props);
    }

    const findInCart = (id) => {
        props.deleteFromCart(id);
        console.log(props);
    }

    const productList = props.cart.map(props =>
        <div className="cartTrip" key={props.id.toString()}>

            <div className="tripAdded">
                <div className={['product-image', props.name.toLowerCase()].join(' ')}></div>
                <div className="product-title">
                    {props.name}
                </div>
            </div>

            <div
                className="cartTripAdd"
                onClick={() => addInCart(props.id)}
            > + </div>

            <div
                className="cartTripRemove"
                onClick={() => findInCart(props.id)}>
                -
            </div>

        </div>
    );

    const emptyCart = <h2>Корзина пуста</h2>


    if (props.cart.length > 0) {
        return (
            <div className="cart-container">
                {productList}
            </div>
        )
    }
    else {
        return (
            <div className="emptyCart">
                {emptyCart}
            </div>
        )
    }
}

export default CartPage;