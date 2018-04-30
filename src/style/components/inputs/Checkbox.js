import styled from 'styled-components';
import { LabelContainer, RadioCheckmark, RadioNotice } from './Radio';

const Checkbox = styled(LabelContainer)`
  & .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const CheckboxMark = styled(RadioCheckmark)`
  border-radius: 0;
`;

Checkbox.Checkmark = CheckboxMark;
Checkbox.Notice = RadioNotice;

export default Checkbox;
