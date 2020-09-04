import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import nameList from './name';

export default (history: History) =>
  combineReducers<IReducerStates>({
    nameList,
    router: connectRouter(history)
  });
