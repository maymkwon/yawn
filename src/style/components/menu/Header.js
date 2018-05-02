import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  background: lightblue;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  font-size: 30px;

  &.up {
    top: ${props => -props.navHeight + 'px'};
  }
`;

export default Header;
