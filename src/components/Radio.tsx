import { Control, Controller } from 'react-hook-form';
import { Form } from '../types/Form.ts';

interface RadioProps {
  name: 'salary';
  options: { value: string; label: string }[];
  control: Control<Form>;
}

export const Radios = ({ name, options, control }: RadioProps) => {
  return (
    <div className="flex items-center mb-4">
      <Controller
        name={name}
        control={control}
        rules={{
          required: `salary is required`,
        }}
        render={({ field, fieldState }) => {
          return (
            <div>
              <div className="flex flex-col">
                {options.map((option, index) => (
                  <div className="flex items-center mb-4" key={option.value}>
                    <input
                      type="radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      id={String(index)}
                      checked={field.value === option.value}
                      {...field}
                      value={option.value}
                      onChange={() => field.onChange(option.value)}
                    />
                    <label
                      htmlFor={String(index)}
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {fieldState.error && (
                <p className="text-red-600">{fieldState.error.message}</p>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};
