import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormContext } from './useFormContext';
import { Form } from './types/Form.ts';
import { routes } from './routes.tsx';

export const useFormPage = (defaultValues: Partial<Form>) => {
  const { setFormData, formData } = useFormContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routeIndex = routes.findIndex(({ path }) => pathname === path);

  const handleNext = (data: Form) => {
    setFormData((prev: Form) => ({ ...prev, ...data }));
    const nextRoute = routes[routeIndex + 1];

    if (nextRoute) navigate(nextRoute.path);
  };

  const handlePrevious = () => {
    const previousRoute = routes[routeIndex - 1];

    if (previousRoute) navigate(previousRoute.path);
  };

  const methods = useForm({ defaultValues: { ...defaultValues, ...formData } });

  return { ...methods, handleNext, handlePrevious };
};
