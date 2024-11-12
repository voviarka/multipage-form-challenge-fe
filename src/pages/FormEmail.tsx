import { Input } from '../components/Input.tsx';
import { useFormPage } from '../useFormPage.ts';
import { FormControls } from '../components/FormControls.tsx';

const FormEmail = () => {
  const { handleSubmit, handleNext, handlePrevious, control } = useFormPage({
    email: '',
  });

  return (
    <form onSubmit={handleSubmit(handleNext)} noValidate>
      <div className="animate-fadeIn">
        <Input
          type="email"
          placeholder="you_email@domain.com"
          name="email"
          label="Your email:"
          control={control}
        />
      </div>

      <FormControls handlePrevious={handlePrevious} />
    </form>
  );
};

export default FormEmail;
