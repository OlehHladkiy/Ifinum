import React from 'react';
import { MainContainer, Header } from './styles';

const Layout = (props) => {
      const {title, children} = props;
      return (
            <MainContainer>
                  <Header>{title}</Header>
                  {children}
            </MainContainer>
      );
}

export default Layout;
