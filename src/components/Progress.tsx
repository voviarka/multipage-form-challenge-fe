import { routes } from '../routes.tsx';
import { useLocation } from 'react-router-dom';

export const Progress = () => {
  const activeSteps = routes.filter(({ name }) => name);
  const { pathname } = useLocation();

  return (
    <ol className="flex justify-center items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
      {activeSteps.map(({ name, path }, index) => {
        const activeStep = pathname === path;

        return (
          <li
            data-test-id={`progress-step-${index + 1}`}
            key={index}
            className={`flex items-center  dark:text-blue-500 space-x-2.5 rtl:space-x-reverse ${activeStep ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${activeStep ? 'border-blue-600 dark:border-blue-500' : 'dark:border-gray-500'}`}
            >
              {index + 1}
            </span>
            <span>
              <h3 className="font-medium leading-tight">{name}</h3>
            </span>
          </li>
        );
      })}
    </ol>
  );
};
