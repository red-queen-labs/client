import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { triggerAlert } from '../redux/actions/alert';

import { Button } from '@material-ui/core';

const Home = ({ alerts, triggerAlert }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          triggerAlert('alert triggered!!', 'success', 2000);
          console.log('triggered alerts:', alerts);
        }}
      >
        Dispatch Set Alert
      </Button>
    </div>
  );
};

const mapState = state => ({
  alerts: state.alerts,
});

export default connect(mapState, { triggerAlert })(Home);
