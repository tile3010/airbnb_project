import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
//REDUX TOOLKIT
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <h1>Hello</h1>
    </Provider>
  </React.StrictMode>,
)