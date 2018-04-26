import { eventChannel } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects'

function initWebsocket() {
  return eventChannel(emitter => {
    const ws = new WebSocket('wss://ws.coinone.co.kr:20013/')
    ws.onopen = () => {
      console.log('opening...')
      let test = {
        channel:'coinone',
        event:'join'
      }
      ws.send(JSON.stringify(test))
    }
    ws.onerror = (error) => {
      console.log('WebSocket error ' + error)
      console.dir(error)
    }
    ws.onmessage = (e) => {
      // let msg = null
      // try {
      //   msg = JSON.parse(e.data)
      // } catch (e) {
      //   console.error(`Error parsing : ${e.data}`)
      // }
      // if (msg) {
      //   const { payload: book } = msg
      //   const channel = msg.channel
      //   switch (channel) {
      //     case 'ADD_BOOK':
      //       return emitter({ type: ADD_BOOK, book })
      //     case 'REMOVE_BOOK':
      //       return emitter({ type: REMOVE_BOOK, book })
      //     default:
      //     // nothing to do
      //   }
      // }
      console.log('onmessage',e)
    }
    // unsubscribe function
    return () => {
      console.log('Socket off')
    }
  })
}
function initWebsocket2() {
  return eventChannel(emitter => {
    const ws = new WebSocket('wss://push.coinone.co.kr/socket.io/?EIO=3&transport=websocket')
    ws.onopen = (e,a) => {
      console.log('opening...', e,a)
      // let test = {
      //   pingInterval:25000,
      //   pingTimeout:60000,
      //   sid:"UIo9qZ3_JvbtMx_oAAhB",
      //   upgrades:[]
      // }
      // ws.send(JSON.stringify(test))
    }
    ws.onerror = (error) => {
      console.log('WebSocket error ' + error)
      console.dir(error)
    }
    ws.onmessage = (e) => {
      let msg = null
      
      try {
        msg = JSON.parse(e.data)
      } catch (e) {
        console.error(`Error parsing : ${e.data}`)
      }
      console.log('MSG', msg)
      if (msg) {
        // ws.send(`${msg}/orderbook,["get_market_ask",0,"10070000","btc"]`)
        ws.send(`${msg}/ticker`)
        ws.send(`${msg}/orderbook`)
        ws.send(`${msg}/trade_btc`)
        ws.send(`${msg}/mytrade`)
      }
      console.log('@@@@@@@',e)
    }
    // unsubscribe function
    return () => {
      console.log('Socket off')
    }
  })
}
export default function* wsSagas() {
  // const channel = yield call(initWebsocket)
  // const channel2 = yield call(initWebsocket2)
  while (true) {
    const action = yield
    // const action2 = yield take(channel2)
    yield put(action)
    // yield put(action2)
  }
}
