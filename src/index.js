import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import skygear from 'skygear'

const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
)

skygear.config({
  'endPoint': 'https://workout.skygeario.com/', // trailing slash is required
  'apiKey': '871d202329e143a1a65da95a30192610',
}).then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}, (error) => {
  console.error(error);
})
