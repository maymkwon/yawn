import React from 'react';
import styled from 'styled-components'

const InputWrap = styled.div`
 font-size: 16px;
  line-height: 24px;
  width: 256px;
  height: 72px;
  display: inline-block;
  position: relative;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  cursor: auto;
`
const Input = styled.input`
  padding: 0px;
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.87);
  cursor: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  opacity: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 100%;
  box-sizing: border-box;
  margin-top: 14px;
`
const Label = styled.label`
  position: absolute;
  line-height: 22px;
  top: 38px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  z-index: 1;
  transform: ${(props) => props.isFocus ? 'scale(0.75) translate(0px, -28px)' : 'scale(1) translate(0px, 0px)'};

  transform-origin: left top 0px;
  pointer-events: none;
  user-select: none;
  color: ${(props) => props.isFocus ? 'rgb(0, 188, 212)' : 'rgba(0, 0, 0, 0.3)'};
`

const Hr = styled.hr`
  border-top: none rgb(224, 224, 224);
  border-left: none rgb(224, 224, 224);
  border-right: none rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  bottom: 8px;
  box-sizing: content-box;
  margin: 0px;
  position: absolute;
  width: 100%;
`
const Hr2 = styled.hr`
  border-top: none rgb(0, 188, 212);
  border-left: none rgb(0, 188, 212);
  border-right: none rgb(0, 188, 212);
  border-bottom: 2px solid rgb(0, 188, 212);
  bottom: 8px;
  box-sizing: content-box;
  margin: 0px;
  position: absolute;
  width: 100%;
  transform: ${props => props.isFocus ? 'scaleX(1);' :'scaleX(0)'};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`

const Notice = styled.div`
  position: absolute;
  bottom: -10px;
  font-size: 12px;
  line-height: 12px;
  ${props => props.error && 'color: rgb(244, 67, 54)'};
  ${props => props.warning && 'color: orange'};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`

Input.Label = Label
Input.Wrap = InputWrap
Input.Notice = Notice


const InputText = (field) => {
  console.log(field)
  return (
    <Input.Wrap>
      <Input.Label htmlFor={field.input.name} isFocus={field.meta.active || field.meta.dirty}>{field.label}</Input.Label>
      <Input {...field.input} type="text" />
      <div>
        <Hr/>
        <Hr2 isFocus={field.meta.active || field.meta.dirty} isError={field.meta.error} isWarning={field.meta.warning}/>
      </div>
      {
        field.meta.touched &&
        (field.meta.error && <Input.Notice error>{field.meta.error}</Input.Notice>)||
        (field.meta.warning && <Input.Notice warning>{field.meta.warning}</Input.Notice>)
      }
    </Input.Wrap>
  );
};

export default InputText;