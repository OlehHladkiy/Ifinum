import React, {useEffect, useState} from 'react';
import Layout from '../hoc/layout';
import OwnButton from '../service/button';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {SERVER_URL} from '../constants';
import moment from 'moment'
import './index.css'

const MainPage = (props) => {
      const [data, setData] = useState([]);

      const fetchData = async () => {
            const {data} = await axios.get(`${SERVER_URL}/invoices`);
            
            setData(data);
      }

      useEffect(() => {
            fetchData();
      }, []);

      const deleteItem = async (id) => {
            const {status} = await axios.delete(`${SERVER_URL}/invoices/${id}`);
            if(status === 200){
                  let index = data.findIndex(item => item.id === id);
                  let newData = [...data.slice(0, index), ...data.slice(index + 1)];
                  setData(newData);
            }
      }
      
      const renderInvoices = () => (
            data.map((item) => (
                  <tr key={item.id}>
                        <th>{moment(item.date_created).format('L').split('/').join('-')}</th>
                        <th>INV-{item.number}</th>
                        <th>{moment(item.date_supply).format('L').split('/').join('-')}</th>
                        <th>{item.comment.slice(0, 7).concat('...')}</th>
                        <th className="last-th">
                              <OwnButton type="link" title="Edit" linkTo={`/add_update_invoice/${item.id}`}/>
                              <OwnButton type="button" title="Delete" color="danger" action={() => deleteItem(item.id)}/>
                        </th>
                  </tr>
            ))
      )

      return (
            <Layout title="Invoices">
                  <div className="action-container">
                        <h2>Action</h2>
                        <OwnButton
                              type="link"
                              linkTo="/add_update_invoice"
                              title="Add new"
                        />
                  </div>
                  <div className="invoices-container">
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
                  </div>
            </Layout>
      );
}

export default withRouter(MainPage);
