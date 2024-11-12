import React, { createContext } from 'react';

export const defaultFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  salary: '',
};

export const FormContext = createContext({
  formData: defaultFormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
});
