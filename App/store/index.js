import {
  createStore as _createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducers, actions } from './modules'
import mySaga from './modules/redux-saga/index'

/**
 * Root states types.
 */
export { States } from './modules'

const sagaMiddleware = createSagaMiddleware()

// Apply thunk middleware
const middleware = applyMiddleware(sagaMiddleware)

/**
 * Create app store.
 */
const createStore = (data: Object = {}) => {
  return _createStore(combineReducers(reducers), data, middleware)
}

const store = createStore()
sagaMiddleware.run(mySaga)

export { store, actions }
