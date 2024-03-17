import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './components/interceptors/axios'
import { Provider } from "react-redux";
import store from "../../zegeju-12/src/components/OTP/store.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
