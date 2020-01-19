import React from 'react';
import { connect } from 'react-redux';
import SEO from './SEO';
import Header from './Header';
import SnackBar from './Alert';

const Layout = ({ alerts, children }) => {
  return (
    <div id="layout" style={{ overflowX: 'noScroll' }}>
      <SEO title="React-from-scatch Starter!!!!!!!" />
      <Header />

      {alerts.map((alert, i) => (
        <SnackBar key={i} msg={alert.msg} type={alert.alertType} />
      ))}

      <main>{children}</main>
    </div>
  );
};

const mapState = state => ({
  alerts: state.alerts,
});

export default connect(mapState)(Layout);
