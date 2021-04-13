// import countresData from './countres.json';
import { useState } from 'react'

import { countres } from "./countres.json"
import InfoIcon from './info.svg'

import './style.css'

/**
 * TODO: На основе props.cart заменять иконку лобавления в корзину на +- quantity
 */
function MainPage(props) {
    console.log('props', props);

    const [modalInfoIsShow, setModalInfoIsShow] = useState(false)

    const productAdd = (id) => {
        props.onAddToCart(id);
    }

    const infoClickHandler = () => {
        console.log('infoClickHandler');
    }

    const productList = countres.map(country =>
        <div className="product" key={country.id.toString()}>
            <div className={['product-image', country.name.toLowerCase()].join(' ')}>
                <img
                    // hover info fullscreen
                    src={InfoIcon}
                    alt=""
                    className="info"
                    onClick={infoClickHandler}
                />
            </div>

            <div className="product-info">
                <div className="product-title">
                    {country.name}
                </div>

                <div
                    className="product-add"
                    onClick={() => productAdd(country.id)}
                >
                </div>
            </div>
        </div>
    );

    return (
        <div className="main-container">
            {productList}
        </div>
    )
}

export default MainPage;