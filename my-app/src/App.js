import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import login from './pages/login';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


class App extends React.Component {
  render(){
  return(
  <Router >
  <div>
  <Route exact path="/" component={login} />
  <Route path="/Page1" component={Page1} />
  <Route path="/Page2" component={Page2} />
  <Route path="/Page3" component={Page3} />
  </div>
  </Router>
  )
  }
  }
  export default App;
  