import React from 'react';
import { TextField } from '@material-ui/core';

export * from '../../hooks/useInput';
interface MyInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function MyInput({ label, value, onChange }: MyInputProps) {
  return <TextField id={`${label}`} label={label} value={value} onChange={onChange} />;
}

export default MyInput;
