import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'

ReactDom.render(
  // 생성한 store를 Provider에 props로 넣어준다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
