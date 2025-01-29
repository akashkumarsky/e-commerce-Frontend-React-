import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
    LOGOUT 
  } from './ActionType';
  
  const initialState = {
    jwt: null,
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
      case GET_USER_REQUEST:
        return {
          ...state,
          loading: true,  // Fixed typo from 'isloading'
          error: null
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          jwt: action.payload.jwt,  // Assume payload contains both jwt and user
          user: action.payload.user,
          isAuthenticated: true,
          error: null
        };
  
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: null
        };
  
      case GET_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          isAuthenticated: true,  // Add authentication flag
          error: null
        };
  
      case LOGIN_FAILURE:
      case REGISTER_FAILURE:
      case GET_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          isAuthenticated: false
        };
  
      case LOGOUT:
        return {
          ...initialState
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;