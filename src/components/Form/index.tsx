import React, {ReactNode} from 'react';
import {Formik, FormikHelpers} from 'formik';

interface Props<T> {
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  children: ReactNode;
}

const Form = <T extends object>(props: Props<T>) => {
  const {validationSchema, initialValues, onSubmit, children} = props;

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      {children}
    </Formik>
  );
};

export default React.memo(Form);
