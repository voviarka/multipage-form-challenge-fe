import { Radios } from '../components/Radio.tsx';
import { useFormPage } from '../useFormPage.ts';
import { FormControls } from '../components/FormControls.tsx';

const FormSalaryIndication = () => {
  const { handleSubmit, handleNext, handlePrevious, control } = useFormPage({
    salary: '',
  });

  return (
    <form onSubmit={handleSubmit(handleNext)}>
      <fieldset className="animate-fadeIn">
        <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Salary indication:
        </legend>
        <div>
          <Radios
            control={control}
            name="salary"
            options={[
              { value: '0 - 1.000', label: '0 - 1.000' },
              { value: '1.000 - 2.000', label: '1.000 - 2.000' },
              { value: '2.000 - 3.000', label: '2.000 - 3.000' },
              { value: '3.000 - 4.000', label: '3.000 - 4.000' },
              { value: 'Mehr als 4.000', label: 'Mehr als 4.000' },
            ]}
          />
        </div>
      </fieldset>

      <FormControls handlePrevious={handlePrevious} />
    </form>
  );
};

export default FormSalaryIndication;
