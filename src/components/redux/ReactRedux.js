import React from 'react'
import {Counter,Buttons} from "./components"
import { Provider } from 'react-redux'
import store from './store'

const ReactRedux = () => {
  return (
    <Provider store={store}>
      <Counter/>
      <Buttons/>
    </Provider>
  )
}

export default ReactRedux
