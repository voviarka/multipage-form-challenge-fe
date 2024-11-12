import { useId } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Form } from '../types/Form.ts';

interface PhoneNumberProps {
  name: 'phone';
  placeholder: string;
  control: Control<Form>;
}

export const PhoneNumber = ({
  placeholder = '',
  name,
  control,
}: PhoneNumberProps) => {
  const phoneId = useId();

  return (
    <>
      <label
        htmlFor={phoneId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone number:
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 19 18"
          >
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
          </svg>
        </div>
        <Controller
          name={name}
          control={control}
          rules={{
            required: `phone is required`,
            pattern: {
              value: /^\+\d{13}$/,
              message:
                'Invalid phone number format. It should follow the pattern: +4912345678910',
            },
            maxLength: { value: 14, message: 'phone cannot exceed 14 symbols' },
            minLength: {
              value: 14,
              message: 'phone cannot be less than 14 symbols',
            },
          }}
          render={({ field, fieldState }) => {
            const errorClass = fieldState.error
              ? 'border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none'
              : '';
            return (
              <>
                <input
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errorClass}`}
                  id={phoneId}
                  type="text"
                  placeholder={placeholder}
                  {...field}
                />
                {fieldState.error && (
                  <p className="pt-2 text-red-600">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>
    </>
  );
};
