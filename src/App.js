import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
