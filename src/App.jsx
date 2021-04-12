import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import MainPage from "./components/MainPage";
import CartPage from "./components/CartPage";
import Header from "./components/Header"

import { countres } from './components/MainPage/countres.json'

import './App.css';
import { useState } from "react";

function App() {

    const [cart, setCart] = useState([]);

    const onAddToCart = (id) => {
        console.log('onAddToCart', id);
        let newCart = [...cart]

        let inCart = newCart.find(cartItem => cartItem.id === id)
        if (inCart) {
            inCart.quantity += 1;
        } else {
            const country = countres.find(c => c.id === id)
            newCart.push({
                ...country,
                quantity: 1
            })
        }

        setCart(newCart)
    }

    return (
        <Router>
            <Header />

            {/* <pre>{JSON.stringify(cart)}</pre> */}

            <div>
                <Switch>
                    <Route path="/" exact>
                        <MainPage
                            cart={cart}
                            onAddToCart={onAddToCart}
                        />
                    </Route>
                    <Route path="/cart">
                        <CartPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
