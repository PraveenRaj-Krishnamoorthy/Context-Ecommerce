import ReactDom from 'react-dom/client';
import React from 'react';
import { App } from './App';
import './index.css';

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);
root.render(
    <App />
)