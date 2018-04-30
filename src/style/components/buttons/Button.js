import styled from 'styled-components';
import {color} from '../../config';

const Button = styled.button`
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  font-size: 13px;
  font-weight: inherit;
  position: relative;
  height: 36px;
  line-height: 36px;
  min-width: 88px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border-radius: 2px;
  user-select: none;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }
`;
const Flat = styled(Button)`
  ${props => color[props.icxStyle].color} 
  & > span {
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    letter-spacing: 0px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }
  &:hover {
    background-color: rgba(153, 153, 153, 0.2);
  }
`;
//// 플로팅 버튼
const Float = styled(Button)`
  ${props => color[props.icxStyle].backgroundColor}

  color: ${props => props.icxStyle !== 'default' && '#fff'};
`;

const FloatButton = styled.div`
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  display: inline-block;
  min-width: 88px;
  margin: 12px;

  & .inner {
    height: 36px;
    border-radius: 2px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    top: 0px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

Button.Flat = Flat;
Button.FloatWrap = FloatButton;
Button.Float = Float;

export default Button;
