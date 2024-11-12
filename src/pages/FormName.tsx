import { Input } from '../components/Input.tsx';
import { useFormPage } from '../useFormPage.ts';
import { FormControls } from '../components/FormControls.tsx';

const FormName = () => {
  const { handleSubmit, handleNext, control } = useFormPage({
    firstName: '',
    lastName: '',
  });

  return (
    <form onSubmit={handleSubmit(handleNext)}>
      <div className="flex flex-wrap gap-5 animate-fadeIn">
        <div className="flex-1-1-48 min-w-53">
          <Input
            control={control}
            name="firstName"
            label="First name"
            placeholder="eg John"
          />
        </div>
        <div className="flex-1-1-48 min-w-52">
          <Input
            control={control}
            name="lastName"
            label="Last name"
            placeholder="eg Doe"
          />
        </div>
      </div>

      <FormControls withHiddenPrevious />
    </form>
  );
};

export default FormName;
