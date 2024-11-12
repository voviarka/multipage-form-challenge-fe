import { useContext } from 'react';
import { FormContext } from './FormContext.ts';

export const useFormContext = () => useContext(FormContext);
