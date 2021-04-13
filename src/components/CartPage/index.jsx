//import { countres } from "../MainPage/countres.json"

import "./style.css"

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

            <div className="cartPropertes">
                <div
                    className="cartTripAdd"
                    onClick={() => addInCart(props.id)}
                > + </div>

                <div className="tripCost">
                    {props.quantity * props.dayCost} €
            </div>

                <div
                    className="cartTripRemove"
                    onClick={() => findInCart(props.id)}>
                    -
                </div>

            </div>

        </div>
    );

    const emptyCart = <h2> Cart is empty! Choose your trip ;)</h2>;


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