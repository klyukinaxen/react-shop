// import countresData from './countres.json';
import { useState } from 'react'
import Modal from 'react-overlays/Modal'
import classNames from 'classnames';

import { countres } from "./countres.json"
import InfoIcon from './info.svg'

import './style.css'

/**
 * TODO: На основе props.cart заменять иконку лобавления в корзину на +- quantity
 */
function MainPage(props) {
    console.log('props', props);

    const [modalInfoIsShow, setModalInfoIsShow] = useState(false)
    const [selectedCountryId, setSelectedCountryId] = useState(0)

    const productAdd = (id) => {
        props.onAddToCart(id);
    }

    const infoClickHandler = (countryId) => {
        console.log('infoClickHandler', countryId);
        setSelectedCountryId(countryId)
        setModalInfoIsShow(true)
    }

    const productList = countres.map(country =>
        <div className="product" key={country.id.toString()}>
            <div className={classNames(['product-image', country.name.toLowerCase()])}>
                <img
                    // hover info fullscreen
                    src={InfoIcon}
                    alt=""
                    className="info"
                    onClick={() => infoClickHandler(country.id)}
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

    const selectedCountry = countres.find(country => country.id === selectedCountryId)

    const renderBackdrop = (props) => (
        <div className="modal-info-backdrop" {...props}></div>
    )

    return (
        <>
            <div className="main-container">
                {productList}
            </div>

            <Modal
                show={modalInfoIsShow}
                onHide={() => setModalInfoIsShow(false)}
                renderBackdrop={renderBackdrop}
                className="modal-info"
            >
                <div>
                    {JSON.stringify(selectedCountry)}
                </div>
            </Modal>
        </>
    )
}

export default MainPage;