import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MainPage from "./components/MainPage";
import CartPage from "./components/CartPage";

import './App.css';

function App() {


    return (
        <>
        <header>
            {/* logo, text, cart logo */}
            
        </header>
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
