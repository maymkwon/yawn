import React, { Component } from 'react';
import styled from 'styled-components'

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  &:hover, &:active {
    text-decoration: underline;
  }
`
const P = styled.p`
  ${ Link } {
    text-decoration: underline;
  }
`
class LinkStyle extends Component {
  render() {
    return (
      <div>
        <h1>상속을할 수 있다</h1>
        <Link>a 태그</Link>
        <P>
          <Link>a 태그</Link>
        </P>
      </div>
    );
  }
}

export default LinkStyle;