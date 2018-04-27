import styled from 'styled-components';
// TODO breakpoint 공통

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 48px;
  }
  @media (min-width: 768px) {
    font-size: 72px;
  }
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`;
