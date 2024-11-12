import { Button } from './Button.tsx';

interface FormControlsProps {
  handlePrevious?: () => void;
  withHiddenPrevious?: boolean;
  withHiddenNext?: boolean;
  shouldDisplaySubmit?: boolean;
}

export const FormControls = ({
  handlePrevious,
  withHiddenPrevious,
  withHiddenNext,
  shouldDisplaySubmit,
}: FormControlsProps) => {
  return (
    <div className="mt-10 flex justify-end gap-5">
      {!withHiddenPrevious && (
        <Button name="previous" onClick={handlePrevious}>
          Previous
        </Button>
      )}
      {!withHiddenNext && (
        <Button type="submit" name="next">
          {shouldDisplaySubmit ? 'Submit' : 'Next'}
        </Button>
      )}
    </div>
  );
};
