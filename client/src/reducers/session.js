import { SESSION_CREATE, SESSION_ERROR, UPDATE_TOKEN, SESSION_LOADING, SESSION_LOADED } from '../actions/session';

const initialState = {
  user: null,
  loading: true,
  error: null,
  token: ''
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SESSION_CREATE:
      return { ...state, user: payload };
    case SESSION_ERROR:
      return { ...state, user: null, error: payload };
    case UPDATE_TOKEN:
      return { ...state, token: payload };
    case SESSION_LOADING:
      return { ...state, loading: true };
    case SESSION_LOADED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
