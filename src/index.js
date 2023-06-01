import { BaseProvider, LightTheme } from 'baseui';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const engine = new Styletron();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
