import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MainPage from "./components/MainPage";
import CartPage from "./components/CartPage";
import Header from "./components/Header"

import './App.css';

function App() {


    return (
        <>
            <Header />
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/" exact>
                            <MainPage />
                        </Route>
                        <Route path="/cart">
                            <CartPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
