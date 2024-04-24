import React, {ReactNode} from 'react';
import {useFormikContext} from 'formik';
import AppButton from 'src/ui/AppButton';

interface Props<T> {
  title: string;
}

const SubmitBtn = <T extends object>(props: Props<T>) => {
  const {title} = props;
  const {handleSubmit} = useFormikContext();
  return <AppButton onPress={handleSubmit} title={title} />;
};

export default React.memo(SubmitBtn);
