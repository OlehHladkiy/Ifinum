export const updateFormField = (formData, {e, key}) => {
      const newFormData = {...formData};
      let newElement = {...newFormData[key]};

      newElement.value = e.target.value;
      newFormData[key] = newElement;
      return newFormData;
}

export const updateDateField = (date, stringDate, key, formData) => {
      const newFormData = {...formData};
      let newElement = {...newFormData[key]};

      newElement.value = stringDate;
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
      }

      return newFormData;
}