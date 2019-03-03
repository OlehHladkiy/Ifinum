import React from 'react';
import './index.css';

const Layout = (props) => {
      const {title, children} = props;
      return (
            <div className="main-container">
                  <h2 className="header">{title}</h2>
                  {children}
            </div>
      );
}

export default Layout;
