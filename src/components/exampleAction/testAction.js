import { createAction, handleActions } from 'redux-actions'
import { Map, List, fromJS } from 'immutable'
import APICaller from '../../APICaller'
//inital
// const url = '' 

const caller = (params) => {

}

console.log(caller)
const initialState = fromJS({
  list: {},
})


//type 

const CREATE = 'test/CREATE';
const REMOVE = 'test/REMOVE';
const READ = 'test/READ';
const UPDATE = 'test/UPDATE';
const GET_LIST = 'test/GET_LIST';
const GET_LIST_ENDED = 'test/GET_LIST_ENDED';


//action
function createAsyncAction(type, fn) {
  return (...args) => async (dispatch) => {
    dispatch({
      type: `${type}_STARTED`,
    });
    let result;
    try {
      result = await fn(...args);
    } catch (error) {
      dispatch({
        type: `${type}_FAILED`,
        error: true,
        payload: error
      });
      throw error;
    }
    dispatch({
      type: `${type}_ENDED`,
      payload: result.data
    });
    return result;
  }
}

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const read = createAction(READ);
export const update = createAction(UPDATE);
export const getList = createAction(GET_LIST, (update) => caller(update));
export const get = createAsyncAction(
  GET_LIST,
  (params) => { console.log(params); return APICaller.get(`/${params}`)}
);


//reducer

export default handleActions({
  [CREATE]: (state, action) => {
    const counter = state.get('counter');

    return state.set('counter', counter.push(
      Map({
        color: action.payload,
        number: 0
      })
    ))
  },
  [REMOVE]: (state, action) => state,
  [READ]: (state, action) => state,
  [UPDATE]: (state, action) => state,
  [GET_LIST_ENDED]: (state, action) => {
    console.log(action)
    return state.set('list', action.payload)
  },
}, initialState)