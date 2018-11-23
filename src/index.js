import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { IntlProvider } from 'react-intl';
import registerServiceWorker from './registerServiceWorker';
import messages_es from "./messages/es.json";
import messages_en from "./messages/en.json";
import './assets/css/index.css';
import './assets/css/error.css';

const messages = {
    'es': messages_es,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
    <IntlProvider locale='en' messages={messages[language]}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

registerServiceWorker();
