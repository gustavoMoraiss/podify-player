import React, {ReactNode} from 'react';
import {Formik, FormikHelpers, useFormikContext} from 'formik';
import {Button} from 'react-native';

interface Props<T> {
  title: string;
}

const SubmitBtn = <T extends object>(props: Props<T>) => {
  const {title} = props;
  const {handleSubmit} = useFormikContext();
  return <Button onPress={handleSubmit} title={title} />;
};

export default React.memo(SubmitBtn);
