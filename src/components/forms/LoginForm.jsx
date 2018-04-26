import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import InputText from './components/InputText'
import { validate, warn } from '../../_helpers'

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit()
    console.log('???', this.props)
  }
  render() {
    const { handleSubmit, pristine, reset, submitting} = this.props;
    console.log(this.props)
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field name="id" component={InputText} label="아이디"/>
          <Field name="password" component={InputText} label="패스워드"/>
          <button type="submit" disabled={submitting}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

// LoginForm.propTypes = {
//   icxStyle: PropTypes.oneOf(['default', 'primary', 'secondary', 'disabled']),
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool
// }

LoginForm.defaultProps = {
  handleSubmit: () => { console.log('handleSubmit이 없습니다.') },
}

const createLoginForm = reduxForm({ form: 'login', validate, warn })
LoginForm = createLoginForm(LoginForm)

export default LoginForm;