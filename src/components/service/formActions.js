import moment from 'moment';

const validate = (formElement) => {
      if(formElement.required){
            formElement.valid = formElement.value !== '';
      }
}

export const updateFormField = (formData, {e, key}) => {
      const newFormData = {...formData};
      let newElement = {...newFormData[key]};

      newElement.value = e.target.value;
      validate(newElement);
      newFormData[key] = newElement;
      return newFormData;
}

export const updateDateField = (date, stringDate, key, formData) => {
      const newFormData = {...formData};
      let newElement = {...newFormData[key]};

      newElement.value = stringDate;
      validate(newElement);
      newFormData[key] = newElement;
      return newFormData
}

export const generateData = (formData) => {
      let dataToSubmit = {};

      for(let key in formData){
            if(key === 'number'){
                  dataToSubmit[key] = formData[key].value.slice(-6);
            } else {
                  dataToSubmit[key] = formData[key].value;
            }
      }

      return dataToSubmit;
}

export const populateFields = (formData, serverData) => {
      const newFormData = {...formData};

      for(let key in newFormData){
            newFormData[key].value = serverData[key];
            newFormData[key].valid = true;
      }

      return newFormData;
}

export const checkValid = (formData) => {
      let valid = true;

      for(let key in formData){
            valid = formData[key].valid && valid;
      }

      return valid;
}