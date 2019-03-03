import React, {useState, useEffect} from 'react';
import Layout from '../hoc/layout';
import './index.css';
import FormField from '../service/formField';
import {updateFormField, updateDateField, generateData, populateFields} from '../service/formActions';
import OwnButton from '../service/button';
import axios from 'axios';
import { SERVER_URL } from '../constants';

const AddUpdateInvoice = (props) => {
      const [formData, setFormData] = useState({
            number: {
                  value: '',
                  key: 'number',
                  config: {
                        type: "text",
                        placeholder: "Enter number",
                        name: 'number',
                  },
                  label: 'Number',
            }, date_supply: {
                  value: new Date(),
                  key: 'date_supply',
                  label: 'Invoice date',
            }, date_created: {
                  value: new Date(),
                  key: 'date_created',
                  label: 'Supply Date',
            }, comment: {
                  value: '',
                  key: 'comment',
                  config: {
                        type: "text",
                        placeholder: "Enter comment",
                        name: "comment",
                  },
                  label: 'Comment',
            }
      });

      const fetchItem = async (id) => {
            const {data} = await axios.get(`${SERVER_URL}/invoices/${id}`);

            setFormData(populateFields(formData, data));
      }
      
      const [mode, setMode] = useState('create');

      useEffect(() => {
            let id = props.match.params.id;
            if(id){
                  fetchItem(id);
                  setMode('update');
            }
      }, [])

      useEffect(() => {
            const newFormData = {...formData};
            let newElement = {...newFormData.number};
            let generateNumber = + new Date() + '';
            newElement.value = `INV-${generateNumber.slice(-6)}`;
            newFormData.number = newElement;
            setFormData(newFormData);
      }, [])

      const updateForm = (element) => {
            setFormData(updateFormField(formData, element));
      }

      const updateDate = (date, stringDate, key) => {
            setFormData(updateDateField(date, stringDate, key, formData));
      }

      const submitForm = async () => {
            const dataToSubmit = generateData(formData);
            let response = null;
            if(mode === 'create'){
                  response = await axios.post(`${SERVER_URL}/invoices`, dataToSubmit);
            } else {
                  response = await axios.put(`${SERVER_URL}/invoices/${props.match.params.id}`, dataToSubmit);
            }
            if(response.status === 201){
                  props.history.push('/');
            }
      }

      return (
            <Layout title="Create Invoice">
                  <div className="form-container">
                        <form onSubmit={submitForm} className="form">
                              <div className="input-group">
                                    <FormField formData={formData.number} typeField="input" change={updateForm}/>
                                    <FormField formData={formData.date_supply} typeField="date" change={updateDate}/>
                                    <FormField formData={formData.date_created} typeField="date" change={updateDate}/>
                              </div>
                              <FormField formData={formData.comment} typeField="textarea" change={updateForm}/>
                        </form>
                        <div className="form-control">
                              <OwnButton 
                                    type="button"
                                    title="Save"
                                    action={submitForm}
                              />
                        </div>
                  </div>
            </Layout>
      );
}

export default AddUpdateInvoice;
