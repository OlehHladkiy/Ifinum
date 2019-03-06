import React from 'react';
import OwnButton from '../service/button';
import { ActionContainer, InvoicesContainer } from './styles';

const MainView = ({renderInvoices}) => {
      return (
            <>
                  <ActionContainer>
                        <h2>Action</h2>
                        <OwnButton
                              type="link"
                              linkTo="/add_update_invoice"
                              title="Add new"
                        />
                  </ActionContainer>
                  <InvoicesContainer>
                        <h2>Invoices</h2>
                        <table>
                              <thead>
                                    <tr>
                                          <th className="th">Create</th>
                                          <th className="th">No</th>
                                          <th className="th">Supply</th>
                                          <th className="th">Comment</th>
                                          <th className="th last-th" style={{textAlign: "center"}}>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {renderInvoices()}
                              </tbody>
                        </table>
                  </InvoicesContainer>
            </>
      );
}

export default MainView;
