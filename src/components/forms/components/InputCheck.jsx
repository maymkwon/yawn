import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Checkbox } from '../../../style/components';

const renderCheckbox = props => {
  return (
    <div className="mv3 w-100">
      <div className="b sans-serif pv2 w-100">{props.label}</div>
      <div>
        <div className="flex items-center mv4 w-100">
          <input
            {...props.input}
            className="mr2"
            type="checkbox"
            checked={props.input.value}
          />
          <div className="sans-serif">{props.label}</div>
        </div>
      </div>
      {(props.meta.touched &&
        (props.meta.error && (
          <Checkbox.Notice error>{props.meta.error}</Checkbox.Notice>
        ))) ||
        (props.meta.warning && (
          <Checkbox.Notice warning>{props.meta.warning}</Checkbox.Notice>
        ))}
    </div>
  );
};

// const CheckboxGroup = ({ label, required, name, options, input, meta }) => (
//   <FormGroup controlId={name}>
//     <ControlLabel>
//       {label} {required && <Label bsStyle="info">required</Label>}
//     </ControlLabel>
//     {options.map((option, index) => (
//       <div className="checkbox" key={index}>
//         <label>
//           <input
//             type="checkbox"
//             name={`${name}[${index}]`}
//             value={option.name}
//             checked={input.value.indexOf(option.name) !== -1}
//             onChange={event => {
//               const newValue = [...input.value];
//               if (event.target.checked) {
//                 newValue.push(option.name);
//               } else {
//                 newValue.splice(newValue.indexOf(option.name), 1);
//               }

//               return input.onChange(newValue);
//             }}
//           />
//           {option.name}
//         </label>
//       </div>
//     ))}
//     <Error meta={meta} />
//   </FormGroup>
// );

const InputCheckbox = () => {
  return (
    <Field
      name="wantsFries"
      label="Would you like fries with that?"
      component={renderCheckbox}
    />
  );
};

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['block', 'inline-block'])
};

InputCheckbox.defaultProps = {
  align: 'block'
};

export default InputCheckbox;
