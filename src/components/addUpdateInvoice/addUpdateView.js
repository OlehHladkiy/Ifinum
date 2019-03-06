import React from 'react';
import { FormContainer, Form, InputGroup, FormControl } from './styles';
import OwnButton from '../service/button';
import FormField from '../service/formField';
import {checkValid} from '../service/formActions';

const AddUpdateView = ({ formData, updateDate, updateForm, submitForm }) => {
      return (
            <div>
                  <FormContainer>
                        <Form onSubmit={submitForm}>
                              <InputGroup>
                                    <FormField formData={formData.number} typeField="input" change={updateForm}/>
                                    <FormField formData={formData.date_supply} typeField="date" change={updateDate}/>
                                    <FormField formData={formData.date_created} typeField="date" change={updateDate}/>
                              </InputGroup>
                              <FormField formData={formData.comment} typeField="textarea" change={updateForm}/>
                        </Form>
                        <FormControl>
                              <OwnButton 
                                    type="button"
                                    title="Save"
                                    action={submitForm}
                                    disabled={!checkValid(formData)}
                              />
                        </FormControl>
                  </FormContainer>
            </div>
      );
}

export default AddUpdateView;
