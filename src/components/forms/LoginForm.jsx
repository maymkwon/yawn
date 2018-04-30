import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputText, InputRadio } from './components';
import { validate, warn } from '../../_helpers';
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
            options={{
              mild: 'Mild',
              medium: 'Medium',
              hot: 'hot'
            }}
          />
          {/* <Field
            name="spiceLevel"
            label="Spice Level"
            component={InputRadio}
            options={{
              mild: 'Mild',
              medium: 'Medium',
              hot: 'hot'
            }}
          /> */}

          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            Female
          </label>

          <Button.Flat type="submit" icxStyle="primary">
            Sign Up
          </Button.Flat>
        </form>
      </div>
    );
  }
}

const createLoginForm = reduxForm({ form: 'login', validate, warn });
LoginForm = createLoginForm(LoginForm);

LoginForm.propTypes = {
  onSubmitFunc: PropTypes.func.isRequired
};

export default LoginForm;
