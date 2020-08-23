import React, { useCallback } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

export * from '../../hooks/useHandler';
export const setSelect = (selects: { name: string }[]) => {
  const obj: { [key: string]: string } = {};
  selects.forEach((item) => {
    obj[item.name] = '';
  });
  return obj;
};

interface MySelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: any) => void;
  options: { value: string; text: string }[];
}

export default function MySelect(select: MySelectProps) {
  const { label, options, name, onChange, value } = select;

  const handleChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target);
  }, []);

  return (
    <FormControl>
      <InputLabel id={`${label}-select-label}`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label}`}
        id={`${label}-select`}
        name={name}
        value={!value ? 'all' : value}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
