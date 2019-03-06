import React, {useState, useEffect} from 'react';
import Layout from '../hoc/layout';
import {updateFormField, updateDateField, generateData, populateFields} from '../service/formActions';
import axios from 'axios';
import { SERVER_URL } from '../constants';
import AddUpdateView from './addUpdateView';

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
                  required: true,
                  valid: false,
                  label: 'Number',
            }, date_supply: {
                  value: new Date(),
                  key: 'date_supply',
                  required: true,
                  valid: true,
                  label: 'Invoice date',
            }, date_created: {
                  value: new Date(),
                  key: 'date_created',
                  required: true,
                  valid: true,
                  label: 'Supply Date',
            }, comment: {
                  value: '',
                  key: 'comment',
                  config: {
                        type: "text",
                        placeholder: "Enter comment",
                        name: "comment",
                  },
                  required: true,
                  valid: false,
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
            newElement.valid = true;
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
                  if(response.status === 201){
                        props.history.push('/');
                  }
            } else {
                  response = await axios.put(`${SERVER_URL}/invoices/${props.match.params.id}`, dataToSubmit);
                  if(response.status === 200){
                        props.history.push('/');
                  }
            }
      }
      
      return (
            <Layout title="Create Invoice">
                  <AddUpdateView
                        formData={formData}
                        updateForm={updateForm}
                        updateDate={updateDate}
                        submitForm={submitForm}
                  />
            </Layout>
      );
}

export default AddUpdateInvoice;
