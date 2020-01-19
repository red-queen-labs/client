import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { triggerAlert } from '../redux/actions/alert';
import HomeListings from '../components/HomeListings';
import GoogleMap from './GoogleMap';
import { Button } from '@material-ui/core';
import '../styles/home.css';
import axios from 'axios';
import buildingData from '../data/mockData.json';

const Home = ({ alerts, triggerAlert }) => {
  const [buildingList, setBuildingList] = useState([]);
  // const data = JSON.parse(buildingData);
  useEffect(() => {
    // const res = axios.get('http://localhost:4000/api/building/get');
  }, []);

  return (
    <div id="homeViewContainer">
      <GoogleMap />
      <HomeListings data={buildingData} />
    </div>
  );
};

const mapState = state => ({
  alerts: state.alerts,
});

export default connect(mapState, { triggerAlert })(Home);
