import { fork } from 'redux-saga/effects'
import { watchProductsFetchFulfilled } from './products'
import wsSagas from './socket'

export default function* rootSaga() {
  yield fork(watchProductsFetchFulfilled)
  // yield fork(wsSagas)
}