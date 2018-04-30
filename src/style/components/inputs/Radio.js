import styled from 'styled-components';
import Input from './Text';

export const RadioNotice = styled(Input.Notice)`
  position: relative;
  bottom: 0;
`;

export const RadioCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const LabelContainer = styled.label`
  display: ${props => props.align};
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const Radio = styled(LabelContainer)`
  & .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

Radio.Notice = RadioNotice;
Radio.Checkmark = RadioCheckmark;

export default Radio;
