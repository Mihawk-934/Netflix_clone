import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  userId: null,
  loading: false,
  errorServor: null,
  registerSuccess: false
};

const authStart = ( state ) => {
  return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
  return updateObject( state, { 
      token: action.idToken,
      userId: action.userId,
      error: null,
      loading: false
   } );
};

const authLogout = (state) => {
  return updateObject(state, {
      token: null,
      userId: null
  });
};

const errorServor = (state, action) => {
  return updateObject(state, {
    errorServor: action.error
  });
};

const registerSuccess = (state, action) => {
  return updateObject(state, {
    registerSuccess: action.value
  });
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state);
    case actionTypes.AUTH_ERROR: return errorServor(state, action);
    case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
    default: return state;
  }
};

export default reducer;