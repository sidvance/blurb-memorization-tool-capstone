import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/authContext';
import { initializeApp } from 'firebase/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyA8AEseCrxeUnxApxCKIu9-_MhlqV5mm0c",
  authDomain: "blurb-81b30.firebaseapp.com",
  databaseURL: "https://blurb-81b30-default-rtdb.firebaseio.com",
  projectId: "blurb-81b30",
  storageBucket: "blurb-81b30.appspot.com",
  messagingSenderId: "1044281537991",
  appId: "1:1044281537991:web:3bb7d49b93618cbf8c55e2",
  measurementId: "G-RNXQNSNXDX"
};

const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
