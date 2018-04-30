import React from 'react';
import { Field } from 'redux-form';
import { Input, Hr, Hr2 } from '../../../style/components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioNotice = styled(Input.Notice)`
  position: relative;
  bottom: 0;
`;
const Radio = props => {
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
      return (
        <label
          className="sans-serif w-100"
          key={`${index}`}
          htmlFor={`${props.input.name}-${index}`}
        >
          <Field
            id={`${props.input.name}-${index}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className="mh2"
          />
          {props.options[key]}
        </label>
      );
    };
    return (
      <div className="mv3 w-100">
        <div className="b sans-serif pv2 w-100">{props.label}</div>
        <div>
          {props.options && Object.keys(props.options).map(renderRadioButtons)}
        </div>
        {(props.meta.touched &&
          (props.meta.error && (
            <RadioNotice error>{props.meta.error}</RadioNotice>
          ))) ||
          (props.meta.warning && (
            <RadioNotice warning>{props.meta.warning}</RadioNotice>
          ))}
      </div>
    );
  }
  return <div>set props "option" or "input"</div>;
};

const InputRadio = ({ options, name }) => {
  return (
    <Field
      name={name}
      label="Spice Level"
      component={Radio}
      options={options}
    />
  );
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired
};

export default InputRadio;
