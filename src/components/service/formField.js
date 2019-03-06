import React from 'react';
import moment from 'moment';
import { FieldContainer, StyledInput, StyledTextarea, StyledDatePicker } from './styles';
import {Icon} from 'antd';

const FormField = (props) => {
      const {typeField, formData, change} = props;
      let template = null;

      switch(typeField){
            case "input": 
                  template = (
                        <FieldContainer>
                              {<span>{formData.label}</span>}
                              <StyledInput 
                                    {...formData.config} 
                                    value={formData.value} 
                                    addonAfter={<Icon type="setting" />}
                                    onChange={(e) => change({e, key: formData.key})}
                              />
                        </FieldContainer>
                  )
                  break;
            case "date":
                  template = <FieldContainer>
                                    {<span>{formData.label}</span>}
                                    <StyledDatePicker allowClear={false} format="LL" value={moment(formData.value)} onChange={(date, dateString) => change(date, dateString, formData.key)}/>
                              </FieldContainer>
                  break;
            case "textarea":
                  template = 
                        <FieldContainer width="100%">
                              {<span>{formData.label}</span>}
                              <StyledTextarea 
                                    {...formData.config} 
                                    value={formData.value}
                                    onChange={(e) => change({e, key: formData.key})}
                              />
                        </FieldContainer>
                  break;
            default: 
                  template = null;
      }

      return (
            template
      );
}

export default FormField;
