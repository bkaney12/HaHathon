import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase'
import { SET_USER } from '../utils/constants';

const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext)
}

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }

    default: 
      return state;
  }
}

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const provider = new GoogleAuthProvider()

  const registerUser = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider)
      console.log(user, 'user')
    } catch (e) {
      console.log(e.message)
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: SET_USER,
        payload: user
      })
    })
  }, [])

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (e) {
      console.log(e.message)
    }
  }

  const values = {
    user: state.user,
    registerUser: registerUser,
    logOut: logOut,
  };


  return (
    <authContext.Provider value={values}>
      {children}
    </authContext.Provider>
  )
}

export default AuthContext
