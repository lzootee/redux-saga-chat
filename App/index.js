import React from 'react'
import { Provider } from 'react-redux'

import { Main } from './screens'
import { store } from './store'


/**
 * Root application.
 */
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
