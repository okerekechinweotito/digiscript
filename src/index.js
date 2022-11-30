import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

import GlobalCSS from './global.css';
import Theme from './theme';

ReactDOM.render(
    <Theme>
        <GlobalCSS />
        <App />
    </Theme>,
    document.getElementById('root')
);
