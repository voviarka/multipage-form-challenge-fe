import { useId } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Form } from '../types/Form.ts';

interface InputProps {
  label: string;
  name: 'firstName' | 'lastName' | 'email';
  placeholder: string;
  control: Control<Form>;
  type?: string;
}

export const Input = ({
  label,
  placeholder = '',
  type = 'text',
  name,
  control,
}: InputProps) => {
  const inputId = useId();
  return (
    <>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: `${name} is required`,
          ...(type === 'email'
            ? {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address format',
                },
              }
            : {}),
        }}
        render={({ field, fieldState }) => {
          const errorClass = fieldState.error
            ? 'border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none'
            : '';
          return (
            <>
              <input
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errorClass}`}
                id={inputId}
                type={type}
                placeholder={placeholder}
                {...field}
              />
              {fieldState.error && (
                <p className="pt-2 text-red-600">{fieldState.error.message}</p>
              )}
            </>
          );
        }}
      />
    </>
  );
};
