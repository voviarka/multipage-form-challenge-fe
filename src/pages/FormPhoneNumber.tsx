import { PhoneNumber } from '../components/PhoneNumber.tsx';
import { useFormPage } from '../useFormPage.ts';
import { FormControls } from '../components/FormControls.tsx';

const FormPhoneNumber = () => {
  const { handleSubmit, handleNext, handlePrevious, control } = useFormPage({
    phone: '',
  });

  return (
    <form onSubmit={handleSubmit(handleNext)}>
      <div className="animate-fadeIn">
        <PhoneNumber
          name="phone"
          placeholder="+49 12345678901"
          control={control}
        />
      </div>

      <FormControls handlePrevious={handlePrevious} />
    </form>
  );
};

export default FormPhoneNumber;
