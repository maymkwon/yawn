import React, { Component } from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2rem;
  /* text-align: center; */
`;

//방법 1
const MarketingHeading = Heading.extend`
  background: midnightblue;
  color: white;
  &:hover {
    text-shadow: 0 0 4px white;
  }
`;

//방법 2
const MarketingHeading2 = styled(Heading)`
  background: mediumblue;
  color: white;
  &:hover {
    text-shadow: 0 0 4px white;
  }
`;

class ExtendHeader extends Component {
  render() {
    return (
      <div>
        <Heading>Heading 기본 스타일</Heading>
        <MarketingHeading>
          방법 1 : Heading 기본 스타일을 extend 할 수 있다
        </MarketingHeading>
        <MarketingHeading2>
          방법 2 : Heading 기본 스타일을 extend 할 수 있다
        </MarketingHeading2>
      </div>
    );
  }
}

export default ExtendHeader;
