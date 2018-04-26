import React, { Component } from 'react';
import styled from 'styled-components'

//attr속성을 추가 컨트롤 할 수 있다.
const Header = styled.header.attrs({
  className: 'p2 bold white bg-blue'
}) `
  ${ props => props.shadow && 'box-shadow: 0 2px 2px 0 #aaa;'}
`

class AttrHeader extends Component {
  render() {
    return (
      <div>
        <Header shadow>
          <h1>attr속성으로 헤터 클래스를 추가할 수 있다.</h1>
        </Header>
      </div>
    );
  }
}

export default AttrHeader;