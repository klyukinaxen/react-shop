import "./style.css"

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
            <div className="cost-trip-container">
                <div className="cost-title"> Days: </div>
                <div className="cart-properties">
                    <div
                        className="cartTripRemove"
                        onClick={() => findInCart(props.id)}
                    >
                        <span>-</span>
                    </div>

                    <div className="day-quantity">
                        {props.quantity}
                    </div>
                
                    <div
                        className="cart-trip-add"
                        onClick={() => addInCart(props.id)}
                    >
                        <span>+</span>
                    </div>
                </div>
                <div className="cost-title"> Final price: {props.quantity * props.dayCost} € </div>

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