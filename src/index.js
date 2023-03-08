import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

let container = document.getElementById('root');
let root = createRoot(container);
root.render(<App />);

serviceWorker.unregister();