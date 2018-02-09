import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

//import './styles/index.css';

import App from './App';


const prerender = function() {
    return ReactDOMServer.renderToString(<App />);
};

export default prerender;
//ReactDOM.render(<App />, document.getElementById('root'));
