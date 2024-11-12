import { useFormContext } from '../useFormContext.ts';
import { useFormPage } from '../useFormPage.ts';
import { FormControls } from '../components/FormControls.tsx';
import { saveForm } from '../utils/saveForm.ts';

const FormSummary = () => {
  const {
    formData: { firstName, lastName, email, phone, salary },
  } = useFormContext();
  const { handlePrevious, handleSubmit } = useFormPage({});

  return (
    <form onSubmit={handleSubmit(saveForm)}>
      <div className="animate-fadeIn">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Summary:
        </h2>
        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Full name
            </dt>
            <dd className="text-lg" data-test-id="fullname">
              {firstName} {lastName}
            </dd>
          </div>
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Email address
            </dt>
            <dd className="text-lg" data-test-id="email">
              {email}
            </dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Phone number
            </dt>
            <dd className="text-lg" data-test-id="phone">
              {phone}
            </dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Salary indication:
            </dt>
            <dd className="text-lg" data-test-id="salary">
              {salary}
            </dd>
          </div>
        </dl>
      </div>

      <FormControls shouldDisplaySubmit handlePrevious={handlePrevious} />
    </form>
  );
};

export default FormSummary;
