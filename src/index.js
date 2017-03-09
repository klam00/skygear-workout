import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import skygear from 'skygear'

const store = createStore(reducer)

skygear.config({
  'endPoint': 'https://workout.skygeario.com/', // trailing slash is required
  'apiKey': '',
}).then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}, (error) => {
  console.error(error);
});
