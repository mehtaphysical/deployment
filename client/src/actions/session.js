import { signupRequest, loginRequest, verifyRequest } from '../services/auth';

export const SESSION_CREATE = 'SESSION_CREATE';
export const SESSION_LOADING = 'SESSION_LOADING';
export const SESSION_LOADED = 'SESSION_LOADED';
export const SESSION_ERROR = 'SESSION_ERROR';

export const signup = ({ email, password }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOADING,
  loadEnd: SESSION_LOADED,
  errorType: SESSION_ERROR,
  payload: signupRequest({ email, password })
});

export const login = ({ email, password }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOADING,
  loadEnd: SESSION_LOADED,
  errorType: SESSION_ERROR,
  payload: loginRequest({ email, password })
});

export const verify = () => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOADING,
  loadEnd: SESSION_LOADED,
  errorType: SESSION_ERROR,
  payload: verifyRequest()
});

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const updateToken = token => ({
  type: UPDATE_TOKEN,
  payload: token
});
