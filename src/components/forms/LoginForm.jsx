import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  loginFormErrorValidate,
  loginFormWarningValidate
} from '../../_helpers';
import { InputText, InputRadio, InputCheckbox } from './components';
import { Button } from '../../style/components';

import PropTypes from 'prop-types';
class LoginForm extends Component {
  render() {
    const radioData2 = [
      { label: '애플', value: '사과는 맛있다' },
      { label: '그래이프', values: '포도는 맛있다.' }
    ];
    // const arrayToObject = array =>
    //   [{ value: 1 }, { value: 2 }, { value: 3 }].reduce(
    //     (result, item, currentIndex) => {
    //       let key = Object.keys(item); //first property: a, b, c
    //       result[key] = item[key];
    //       return result;
    //     },
    //     {}
    //   );

    // const peopleObject = arrayToObject(radioData2);
    // console.log(peopleObject);
    const { handleSubmit, onSubmitFunc } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <Field name="id" component={InputText} label="아이디" />
          <Field name="password" component={InputText} label="패스워드" />
          <InputRadio
            name="rrr"
            align="inline-block"
            // options={[
            //   { value: 'Mildvalue', name: 'mildName' },
            //   { value: 'Medium', name: 'medname' },
            //   { value: 'hot', name: 'hotname' }
            // ]}
            options={{
              Mildvalue: 'Mildvalue',
              Medium: 'Medium',
              hot: 'hot'
            }}
          />
          <InputCheckbox name="ccc" align="inline-block" />
          <Button.Flat type="submit" icxStyle="primary">
            Sign Up
          </Button.Flat>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            <div style={{ background: 'red', padding: 10 }}>aaa</div>
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="male1" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="male2" />{' '}
            Male
          </label>
        </form>
      </div>
    );
  }
}

const createLoginForm = reduxForm({
  form: 'login',
  validate: loginFormErrorValidate,
  warn: loginFormWarningValidate
});
LoginForm = createLoginForm(LoginForm);

LoginForm.propTypes = {
  onSubmitFunc: PropTypes.func.isRequired
};

export default LoginForm;
