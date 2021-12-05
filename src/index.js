import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';

import RandomNumbers from './components/random-numbers/random-numbers';
import Quotes from './components/quotes/quotes';
import FillImage from './components/fill-image/fill-image';

const App = () => {
    return (
        <React.Fragment>
            <RandomNumbers />
            <Quotes />
            <FillImage />
        </React.Fragment>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
