import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import MainPage from "./components/MainPage";
import CartPage from "./components/CartPage";
import Header from "./components/Header"

import './App.css';
import './countres.json';

function App() {
    return (
        <>

            <Router>
                <Header />
                <div>
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
