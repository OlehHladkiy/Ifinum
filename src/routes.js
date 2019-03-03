import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/main';
import AddUpdateInvoice from './components/addUpdateInvoice';

const Routes = () => {
      return (
            <Switch>
                  <Route path="/" exact component={MainPage}/>
                  <Route path="/add_update_invoice" exact component={AddUpdateInvoice}/>
                  <Route path="/add_update_invoice/:id" exact component={AddUpdateInvoice}/>
            </Switch>
      );
}

export default Routes;
