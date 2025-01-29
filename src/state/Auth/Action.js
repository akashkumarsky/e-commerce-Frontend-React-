import axios from 'axios';
import { API_BASE_URL } from '../../config/ApiConfig';
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './ActionType';

const registerRequest = () => ({type:REGISTER_REQUEST});
const registerSuccess = (user) => ({type:REGISTER_SUCCESS,payload:user});
const registerFailure = (error) => ({type:REGISTER_FAILURE,payload:error});


export const register=(userData)=> async(dispatch)=>{

    dispatch(registerRequest());

    try{
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData);

        const user =response.data;  
        if(user.jwt){
            localStorage.setItem('jwt',user.jwt);
            
        }
        console.log("register user",user);
        dispatch(registerSuccess(user.jwt));

    }catch(error){
        dispatch(registerFailure(error.message));
    }

}



const loginRequest = () => ({type:LOGIN_REQUEST});
const loginSuccess = (user) => ({type:LOGIN_SUCCESS,payload:user});
const loginFailure = (error) => ({type:LOGIN_FAILURE,payload:error});

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
      const user = response.data;
      
      if (user.jwt) {
        localStorage.setItem('jwt', user.jwt);
        dispatch(loginSuccess({ 
          jwt: user.jwt,
          user: user  // Assuming the API returns user data along with JWT
        }));
      }
      return user;
      
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch(loginFailure(errorMessage));
      throw new Error(errorMessage);
    }
  };

const getUserRequest = () => ({type:GET_USER_REQUEST});
const getUserFailure = (error) => ({type:GET_USER_FAILURE,payload:error});
const getUserSuccess = (user) => ({type:GET_USER_SUCCESS,payload:user});




export const getUser=()=> async(dispatch)=>{
    dispatch(getUserRequest());
    try{
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('jwt')}`
            }
        });

        const user =response.data;  
        console.log("user",user);
        dispatch(getUserSuccess(user));

    }catch(error){
        dispatch(getUserFailure(error.message));
    }

}

export const logout=()=> async(dispatch)=>{
    localStorage.clear();
    dispatch({type:LOGOUT,payload:null});
}

