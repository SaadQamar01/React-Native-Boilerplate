import * as ACTION_TYPES from './ActionTypes';
import * as Services from './../services/index';

export const login = (email, password) => {
  return dispatch => {
    dispatch({type: ACTION_TYPES.USER_LOGIN_REQUESTED});
    Services.login(email, password)
      .then(response => {
        console.log('USER_LOGIN_SUCCESS', response);
        dispatch({type: ACTION_TYPES.USER_LOGIN_SUCCESS, payload: response});
      })
      .catch(error => {
        dispatch({type: ACTION_TYPES.USER_LOGIN_FAILED, error});
      });
  };
};

export const userLoginSuccess = ({email, password}) => ({
  type: ACTION_TYPES.USER_LOGIN_SUCCESS,
  payload: {
    client: 'default',
    request: {
      method: 'POST',
      url: '/login-success',
      data: {
        email,
        password,
      },
    },
    data: {
      token: 'TOKEN',
    },
  },
});

export const userLoginFail = ({email, password}) => ({
  type: ACTION_TYPES.USER_LOGIN_FAILED,
  payload: {
    client: 'default',
    request: {
      method: 'POST',
      url: '/login-fail',
      data: {
        email,
        password,
      },
    },
  },
  error: {
    response: {
      data: {
        message: 'Something went wrong',
      },
    },
  },
});

export function userRequestLogout() {
  return {
    type: ACTION_TYPES.USER_LOGOUT_REQUESTED,
    payload: {},
  };
}
