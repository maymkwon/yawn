import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import {Header, NoMatch} from '../common/components'
import Home from '../home/Home'
import MyPage from '../mypage/MyPage'
import About from '../about/About'
import Post from '../post/Post'

const ConfigRoute = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Post} />
            <Route path="/me" component={MyPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ConfigRoute;