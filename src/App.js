import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home';
// import Signup from './pages/SignUp';
import SignIn from './pages/SignIn';
import GoogleMap from './pages/GoogleMap';
import PhotoView from './pages/PhotoView';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            {/* <Route exact path="/signup" component={Signup} /> */}
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/googleMap" component={GoogleMap} />
            <Route exact path="/photoView" component={PhotoView} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
