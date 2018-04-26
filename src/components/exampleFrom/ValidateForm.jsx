import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { validate, warn } from '../../_helpers'
import RenderField from '../../common/components/RenderField'


class ValidateForm extends Component {

  handleSubmit = (e) => {
    console.log('???', this.props)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name="username"
          type="text"
          component={RenderField}
          label="Username"
        />
        <Field name="email" type="email" component={RenderField} label="Email" />
        <Field name="age" type="number" component={RenderField} label="Age" />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    aaaa: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(console.log('mapDispatchToProps!!'))
    }
  }
}

ValidateForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidateForm);

export default reduxForm({
  form: 'syncValidation',
  validate,
  warn,
})(ValidateForm);