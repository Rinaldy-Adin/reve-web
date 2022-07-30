import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Theme from './themes/Theme';
import GlobalStyle from './themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { initialize } from './firebase';

initialize();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
