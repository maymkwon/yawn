import styled from 'styled-components';
import { fontSize, fontWeight, lineHeight } from '../config';
// TODO breakpoint 공통
// a태그

export const Heading = styled.h1`
  margin-bottom: 0;
  font-size: ${fontSize.displayLarge};
  font-weight: ${fontWeight.bold};
  /* line-height: ${lineHeight.displayLarge}; */
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
