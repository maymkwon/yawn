import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Radio } from '../../../style/components';

const renderRadio = props => {
  if (props && props.input && props.options) {
    const renderRadioButtonsForOptionsArr = (key, index) => {
      return (
        <Radio
          key={`${index}`}
          htmlFor={`${props.input.name}-${index}`}
          align={props.align}
        >
          <Field
            id={`${props.input.name}-${index}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key.value}
            className="mh2"
          />
          <span>{props.options[index].value}</span>
          <Radio.Checkmark className="checkmark" />
        </Radio>
      );
    };
    const renderRadioButtonsForOptionsObj = (key, index) => {
      return (
        <Radio
          key={`${index}`}
          htmlFor={`${props.input.name}-${index}`}
          align={props.align}
        >
          <Field
            id={`${props.input.name}-${index}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            className="mh2"
          />
          <span>{props.options[key]}</span>
          <Radio.Checkmark className="checkmark" />
        </Radio>
      );
    };
    return (
      <div className="mv3 w-100">
        <div className="b sans-serif pv2 w-100">{props.label}</div>
        <div>
          {props.options && Array.isArray(props.options)
            ? props.options.map(renderRadioButtonsForOptionsArr)
            : Object.keys(props.options).map(renderRadioButtonsForOptionsObj)}
        </div>
        {(props.meta.touched &&
          (props.meta.error && (
            <Radio.Notice error>{props.meta.error}</Radio.Notice>
          ))) ||
          (props.meta.warning && (
            <Radio.Notice warning>{props.meta.warning}</Radio.Notice>
          ))}
      </div>
    );
  }
  return <div>set props "option" or "input"</div>;
};

const InputRadio = ({ options, name, align }) => {
  return (
    <Field
      name={name}
      label="Spice Level"
      component={renderRadio}
      options={options}
      align={align}
    />
  );
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ]),
  align: PropTypes.oneOf(['block', 'inline-block'])
};

InputRadio.defaultProps = {
  align: 'block'
};

export default InputRadio;
