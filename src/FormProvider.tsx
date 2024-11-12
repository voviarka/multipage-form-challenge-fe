import { ReactNode, useState } from 'react';
import { Form } from './types/Form.ts';
import { defaultFormData, FormContext } from './FormContext.ts';

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<Form>(defaultFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
