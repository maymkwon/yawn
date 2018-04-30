import React from 'react';
import {Input, Hr, Hr2} from '../../../style/components'

const InputText = field => {
  console.log(field);
  return (
    <Input.Wrap>
      <Input.Label
        htmlFor={field.input.name}
        isFocus={field.meta.active || field.meta.dirty}
      >
        {field.label}
      </Input.Label>
      <Input {...field.input} type="text" />
      <div>
        <Hr />
        <Hr2
          isFocus={field.meta.active || field.meta.dirty}
          isError={field.meta.error}
          isWarning={field.meta.warning}
        />
      </div>
      {(field.meta.touched &&
        (field.meta.error && (
          <Input.Notice error>{field.meta.error}</Input.Notice>
        ))) ||
        (field.meta.warning && (
          <Input.Notice warning>{field.meta.warning}</Input.Notice>
        ))}
    </Input.Wrap>
  );
};

export default InputText;
