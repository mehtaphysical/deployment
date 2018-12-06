import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { signup, login, verify } from '../../actions/session';
import { getSessionUser, getSessionLoading, getSessionError } from '../../selectors/session';
import { ROUTES } from '../../routes';

export const Signup = connect(
  state => ({
    user: getSessionUser(state),
    loading: getSessionLoading(state),
    error: getSessionError(state)
  }),
  dispatch => ({ onSubmit: ({ email, password }) => dispatch(signup({ email, password })) })
)(AuthForm);

export const Login = connect(
  null,
  dispatch => ({ onSubmit: ({ email, password }) => dispatch(login({ email, password })) })
)(AuthForm);

export const withAuth = Component => {
  class WithAuth extends PureComponent {
    static propType = {
      sessionUser: PropTypes.object,
      loadingSession: PropTypes.bool.isRequired,
      verifySession: PropTypes.func.isRequired
    }

    componentDidMount() {
      if (!this.props.sessionUser) return this.props.verifySession();
    }

    render() {
      if (!this.props.sessionUser && !this.props.loadingSession) return <Redirect to={ROUTES.LOGIN.linkTo()} />
      if(!this.props.sessionUser && this.props.loading) return null;

      return <Component {...this.props} />
    }
  }

  return connect(
    state => ({
      sessionUser: getSessionUser(state),
      loadingSession: getSessionLoading(state)
    }),
    dispatch => ({
      verifySession: () => dispatch(verify())
    })
  )(WithAuth)
}
