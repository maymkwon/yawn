import { eventChannel, effect } from 'redux-saga'
const { buffers} = effect
const defaultMatcher = () => true;

export function createSocketChannel(eventType, buffer, matcher) {
  return eventChannel(emit => {
    console.log('EMIT____',emit)
    const ws = new WebSocket('ws://localhost:8090/ws/path')
    ws.onopen = () => {
      console.log('opening...')
      ws.send('hello server')
    }
    
    const emitter = message => emit(message);
    console.log('EMITTER____', emitter)

    ws.on(eventType, emitter);
    return function unsubscribe() {
      ws.off(eventType, emitter);
    }
  }, buffer || buffers.none(), matcher || defaultMatcher);
}

export function closeChannel(channel) {
  if (channel) {
    channel.close();
  }
}