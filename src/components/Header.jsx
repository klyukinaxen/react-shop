import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/">
                <p className="title">choose your trips</p>
            </Link>

            <Link to="/cart">
                <div className="shopping-cart"></div>
            </Link>

        </header>
    )
}

export default Header