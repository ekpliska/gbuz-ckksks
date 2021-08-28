import React from 'react';
import { useFormik, FormikProvider } from 'formik';
import Button from 'ui/Button';
import { FilterFields } from './FilterFields';
import { IFilter } from './types';
import sts from './styles.module.scss';

const Filter: IFilter = ({
  fields,
  initialValues,
  isLoading,
  isDisabled,
  isShowDeleted,
  onSubmit,
}) => {
  const { values, handleReset, submitForm, ...formikProps } = useFormik<typeof initialValues>({
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues,
    onSubmit,
  });

  const actionButtons: JSX.Element = React.useMemo(() => {
    return (
      <div className={sts.form__buttons}>
        <Button
          type="submit"
          variant="filled"
          disabled={isDisabled}
          onClick={submitForm}
        >
          Найти
        </Button>
        <Button type="reset" variant="outlined" onClick={handleReset}>
          Очистить
        </Button>
      </div>
    );
  }, [isLoading, isDisabled, isShowDeleted, handleReset, submitForm]);

  return (
    <div className={sts.formWrapper}>
      {Boolean(fields.length) && (
        <FormikProvider
          value={{
            values,
            handleReset,
            submitForm,
            ...formikProps,
          }}
        >
          <div className={sts.form__inputs}>
            <FilterFields fields={fields} />
            {Boolean(fields.length) && actionButtons}
          </div>
        </FormikProvider>
      )}
    </div>
  );
};

export default Filter;
