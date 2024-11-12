import { ReactNode, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import FormName from './pages/FormName.tsx';

const FormSummary = lazy(() => import('./pages/FormSummary.tsx'));
const FormEmail = lazy(() => import('./pages/FormEmail.tsx'));
const FormPhoneNumber = lazy(() => import('./pages/FormPhoneNumber.tsx'));
const FormSalaryIndication = lazy(
  () => import('./pages/FormSalaryIndication.tsx'),
);

export const routes: {
  path: string;
  component: ReactNode;
  name: string;
}[] = [
  { path: '/', component: <Navigate replace to="/name" />, name: '' },
  { path: '/name', component: <FormName />, name: 'Name' },
  { path: '/email', component: <FormEmail />, name: 'Email' },
  { path: '/phone', component: <FormPhoneNumber />, name: 'Phone' },
  {
    path: '/salary-indication',
    component: <FormSalaryIndication />,
    name: 'Salary indication',
  },
  { path: '/summary', component: <FormSummary />, name: 'Submit' },
];
