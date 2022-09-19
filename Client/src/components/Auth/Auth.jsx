import React from 'react';
import s from './Auth.module.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginThunk } from '../../redux/AuthReducer';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="email" component="input" placeholder="e-mail" />
      <Field name="password" component="input" placeholder="Password" />
      <Field name="remember" component="input" type="checkbox" />
      <label>Remember me</label>
      <button>Login</button>

      <div>{props.error}</div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

const Auth = props => {
  const onSubmitData = async FormData => {
    props.LoginThunk(FormData.email, FormData.password);
  };
  if (props.isAuth) {
    return <Navigate to={'/'} />;
  } else {
    return (
      <div className={s.login}>
        <LoginReduxForm onSubmit={onSubmitData} />
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    state: state,
    isAuth: state.Auth.isAuth,
  };
};
export default connect(mapStateToProps, { LoginThunk })(Auth);
