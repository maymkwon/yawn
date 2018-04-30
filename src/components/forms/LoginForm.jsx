import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputText } from './components';
import { validate, warn } from '../../_helpers';
import { Button } from '../../style/components';

import PropTypes from 'prop-types';

class LoginForm extends Component {
  render() {
    const { handleSubmit, onSubmitFunc } = this.props;
    return <div>
      <form onSubmit={handleSubmit(onSubmitFunc)}>
        <Field name="id" component={InputText} label="아이디" />
        <Field name="password" component={InputText} label="패스워드" />
        <Button.Flat type="submit" icxStyle="primary">
          Sign Up
        </Button.Flat>
      </form>
    </div>;
  }
}

const createLoginForm = reduxForm({ form: 'login', validate, warn });
LoginForm = createLoginForm(LoginForm);

LoginForm.propTypes = {
  onSubmitFunc: PropTypes.func.isRequired
};

export default LoginForm;
