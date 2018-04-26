
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ActionTest from '../components/exampleAction/testAction';

export default combineReducers({
  form: formReducer,
  testAction: ActionTest
});