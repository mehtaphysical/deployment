import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default class AuthForm extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.object
  }

  state = {
    email: '',
    password: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.onSubmit({ email, password });
  }

  render() {
    if (this.props.user) return <Redirect to={ROUTES.HOME.linkTo()} />
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="email" value={email} onChange={this.handleChange} />
        <input name="password" value={password} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}
