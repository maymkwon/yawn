import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'
import { browserHistory } from 'react-router'
import {history} from './routeHistory'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import rootSaga from '../sagas/index'

const logger = createLogger({ collapsed: true })
const router = routerMiddleware(history)
const saga = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(
  router,
  logger,
  saga,
  thunkMiddleware)(createStore)

export let configureStore = () => {
  const store = createStoreWithMiddleware(rootReducer, {})
  saga.run(rootSaga)
  return store
}