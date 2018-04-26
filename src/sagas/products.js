
import { takeLatest } from 'redux-saga'
import { select, put } from 'redux-saga/effects'
// import { selectProduct } from 'actions/products'
// import actionTypes from 'constants/action-types'

// const { PRODUCTS } = actionTypes

export function* selectProductAfterProductsFulfilled() {
  const { list } = yield select() // select function is like getState()
  console.log(list)
  if (!list) {
    yield put(alert('error!!!')) // puts a new action on the flow
  }
}

export function* watchProductsFetchFulfilled() {
  yield* takeLatest(
    ['test/GET_LIST_FAILED', /* Other actions you want to watch */],
    selectProductAfterProductsFulfilled
  )
}