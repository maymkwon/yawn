import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const TabWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TabContent = styled.div`
  flex: 1;
  width: 100%;
`;
const TabList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const TabButton = styled(Button)`
  border-radius: 0;
  border-bottom: 4px solid ${props => (props.selected ? 'blue' : '#fff')};
  &:hover,
  &:focus,
  &:active {
    border-bottom: 4px solid ${props => (props.selected ? 'blue' : '#eee')};
  }
`;
const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 16px;
`;
const TabPanel = ({ children }) => (
  <TabContent role="tabpanel">{children}</TabContent>
);
//
// STYLE 끝
//

class Tabs extends Component {
  static Pannel = TabPanel;
  state = {
    selectedTab: 0
  };
  selectTab = tabIndex => {
    this.setState({ selectedTab: tabIndex });
  };
  render() {
    const { children } = this.props;
    const { selectedTab } = this.state;
    console.log(this.state);
    return (
      <TabWrapper>
        <TabList role="tablist">
          {React.Children.map(children, ({ props: { label } }, index) => (
            <TabButton
              role="tab"
              tabIndex="0"
              selected={selectedTab === index}
              aria-selected={selectedTab === index ? 'true' : 'false'}
              onClick={() => this.selectTab(index)}
            >
              {label}
            </TabButton>
          ))}
        </TabList>

        <Content>
          {React.Children.map(
            children,
            (comp, index) => (selectedTab === index ? comp : undefined)
          )}
        </Content>
      </TabWrapper>
    );
  }
}

export default Tabs;
