import React from 'react';
import {Input, Icon, DatePicker} from 'antd';
import moment from 'moment';

const FormField = (props) => {
      const {typeField, formData, change} = props;
      let template = null;

      switch(typeField){
            case "input": 
                  template = (
                        <div className="field-container">
                              {<span className="form-label">{formData.label}</span>}
                              <Input 
                                    className="input"
                                    {...formData.config} 
                                    value={formData.value} 
                                    addonAfter={<Icon type="setting" />}
                                    onChange={(e) => change({e, key: formData.key})}
                              />
                        </div>
                  )
                  break;
            case "date":
                  template = <div className="field-container">
                                    {<span className="form-label">{formData.label}</span>}
                                    <DatePicker format="LL" value={moment(formData.value)} className="date-picker" onChange={(date, dateString) => change(date, dateString, formData.key)}/>
                              </div>
                  break;
            case "textarea":
                  template = 
                        <div className="field-container max-wdth">
                              {<span className="form-label">{formData.label}</span>}
                              <textarea 
                                    className="text-area"
                                    {...formData.config} 
                                    value={formData.value}
                                    onChange={(e) => change({e, key: formData.key})}
                              />
                        </div>
                  break;
            default: 
                  template = null;
      }

      return (
            template
      );
}

export default FormField;
