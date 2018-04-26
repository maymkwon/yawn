import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './grid.css'

const ResponsiveGridLayout = WidthProvider(Responsive);

class GridLayout extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 2, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 2, y: 0, w: 1, h: 2 }
    ];
    return (
      <ResponsiveGridLayout className="layout" layouts={{layouts}}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        isResizable
        useCSSTransforms>
        <div key="1" style={{background: 'pink'}}>1</div>
        <div key="2" style={{ background: 'green' }}>2</div>
        <div key="3" style={{ background: 'blue' }}>3</div>
      </ResponsiveGridLayout>
    )
  }
}


export default GridLayout;