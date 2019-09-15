import * as ACTION_TYPES from './../actions/ActionTypes';

const initialState = {
  token: undefined,
  user: null,
  isAuthenticating: false,
  error: undefined,
  isFailed: false,
};

export default function base(state = initialState, action) {
  const {type, payload, error} = action;

  switch (type) {
    case ACTION_TYPES.USER_LOGIN_REQUESTED:
      console.log(action);
      return {
        ...state,
        isAuthenticating: true,
        isFailed: false,
      };
    case ACTION_TYPES.USER_LOGIN_SUCCESS:
      console.log(payload);
      return {
        token: payload.token,
        user: payload.user,
        isAuthenticating: false,
        isFailed: false,
      };
    case ACTION_TYPES.USER_LOGIN_FAILED:
      console.log(action);
      return {
        error,
        isAuthenticating: false,
        isFailed: true,
      };
    case ACTION_TYPES.USER_LOGOUT_REQUESTED:
      console.log('Logout');
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
