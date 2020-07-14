import React, { memo } from 'react';
import InputWrapper from './style';

const Input = memo(({ ...props }) => (
  <InputWrapper {...props} />
));

export default Input;
