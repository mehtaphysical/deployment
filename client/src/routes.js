import Home from './components/home/Home';
import { Signup, Login, withAuth } from './containers/auth/Auth';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: withAuth(Home),
    linkTo: () => '/'
  },
  SIGNUP: {
    path: '/signup',
    Component: Signup,
    linkTo: () => '/signup'
  },
  LOGIN: {
    path: '/login',
    Component: Login,
    linkTo: () => '/login'
  }
}
