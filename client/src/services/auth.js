import { post, get } from './requests';

export const signupRequest = ({ email, password }) => {
  return post('/api/users/signup', { email, password });
}

export const loginRequest = ({ email, password }) => {
  return post('/api/users/login', { email, password });
}

export const verifyRequest = () => {
  return get('/api/users/verify');
}
