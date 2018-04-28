import React, { Component } from 'react';
import {Button,FloatButton} from './Buttons'

// TODO 버튼크기
class ButtonContainer extends Component {
  render() {
    return (
      <div>
        <Button.Flat icxStyle="primary">aaaa</Button.Flat>
        <FloatButton>
          <FloatButton.Float icxStyle="primary">
            <div>
              <div className="inner">
                <span>버튼</span>
              </div>
            </div>
          </FloatButton.Float>
        </FloatButton>
      </div>
    );
  }
}

export default ButtonContainer;