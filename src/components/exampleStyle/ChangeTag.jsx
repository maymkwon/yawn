import React, { Component } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 20px;
  background-color: ${props =>
    (props.primary && '$primary') || (props.danger && '$danger')};
`;

export const H1 = Heading;
export const H2 = Heading.withComponent('h2');
export const H3 = Heading.withComponent('h3');

class ChangeTag extends Component {
  render() {
    return (
      <div>
        <h1>withComponent로 태그를 바꿀수 있다</h1>
        <H1>h1입니다.</H1>
        <H2>h2입니다.</H2>
        <H3>h3입니다.</H3>
      </div>
    );
  }
}

export default ChangeTag;
