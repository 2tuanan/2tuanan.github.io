import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);