import React from 'react';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import { renderToString } from 'react-dom/server';

import styles from './styles';

import App from './App';

injectGlobal`${styles}`;

const prerender = function() {
    const sheet = new ServerStyleSheet();

    const html = renderToString(sheet.collectStyles(<App />));

    const styles = sheet.getStyleTags();

    return {
        html,
        styles
    };
};

export default prerender;
//ReactDOM.render(<App />, document.getElementById('root'));
