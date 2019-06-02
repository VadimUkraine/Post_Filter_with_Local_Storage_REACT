import React, { Component } from 'react';
import './App.css';
import PostsListDynamic from './screens/PostsListDynamic';
import ReviewPostDynamic from './screens/ReviewPostDynamic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router >
          <Switch>
            <Route exact path="/" component={PostsListDynamic}></Route>
           	<Route path="/:id" component={ReviewPostDynamic}></Route>
          </Switch>
        </Router>
    );
  }
}

export default App;