import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {reducer as formReducer} from 'redux-form';
import {reducer as modalReducer} from 'redux-modal';
import authReducers from './auth';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'formReducer', 'modalReducer'],
};

const reducers = persistCombineReducers(config, {
  form: formReducer,
  modal: modalReducer,
  auth: authReducers,
});

export default reducers;
