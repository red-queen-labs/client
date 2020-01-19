import React, { useState } from 'react';
import { connect } from 'react-redux';
import SEO from './SEO';
import Header from './Header';
import SideBar from './SideBar';
import SnackBar from './Alert';

const Layout = ({ alerts, children }) => {
  const [sideBarIsOpen, toggleSidebar] = useState();

  return (
    <div id="layout">
      <SEO title="React-from-scatch Starter!!!!!!!" />
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isOpen={sideBarIsOpen} />
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
