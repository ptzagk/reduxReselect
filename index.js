import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {whyDidYouUpdate} from 'why-did-you-update'

let store = createStore(todoApp, window.devToolsExtension ? window.devToolsExtension() : undefined)

whyDidYouUpdate(React)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
