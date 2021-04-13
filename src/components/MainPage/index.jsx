// import countresData from './countres.json';
import { useState } from 'react'
import Modal from 'react-overlays/Modal'
import classNames from 'classnames';

import { countres } from "./countres.json"
import InfoIcon from './info.svg'

import './style.css'

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
                    <div className="image-title">
                        <div className={classNames(['product-image', selectedCountry.name.toLowerCase()])}>
                        </div>
                    </div>
                    <div className="info-description">
                        <div className="info-title">
                            {selectedCountry.name}
                        </div>
                        <div className="info-info">
                            {selectedCountry.info}
                        </div>
                        <div className="dayCost-info">
                            Цена за день: {selectedCountry.dayCost} €
                    </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MainPage;