import React, { useState } from 'react';
import image from './../../img/everest.jpg';
import './fill-image.scss';

const FillImage = () => {
    const [fill, setFill] = useState(false);
    const body = document.getElementsByTagName('body')[0];

    const openImg = () => {
        setFill(true);
        body.classList.add('body-fill');
    };
    const closeImg = () => {
        setFill(false);
        body.classList.remove('body-fill');
    };

    return (
        <React.Fragment>
            <h2>IV. Frontend CSS</h2>
            <p className="description">
                Umieść na stronie zdjęcie, które zawsze będzie zajmowało 100% szerokości oraz 100% widoku okna
                przeglądarki. Obrazek ma zachowywać proporcje.
            </p>
            <button className="button" onClick={openImg}>
                Pokaż zdjęcie
            </button>
            {fill && (
                <React.Fragment>
                    <img src={image} alt="everest" className="fill-image" />
                    <div className="fill-image-close" onClick={closeImg}></div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default FillImage;
