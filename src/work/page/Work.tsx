import React, { useState } from 'react';
import Select, { setSelect, useSelect } from '../../common/components/Styles/Select';
import Input, { useInput } from '../../common/components/Styles/Input';
import TransferList, { useTransfer } from '../../common/components/Styles/TransferList';

function Work() {
  const { select, handleSelect } = useSelect<string>(setSelect(SELECT));
  const { value, handleValue } = useInput();
  const { right, left, handleLeft, handleRight } = useTransfer<string>(
    ['Item1', 'Item2', 'Item3', 'Item4'],
    [],
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Input label="workerID" value={value} onChange={handleValue} />
      {SELECT.map((item, i) => {
        return (
          <Select
            key={item.id}
            value={select[item.name]}
            name={item.name}
            label={item.label}
            onChange={handleSelect}
            options={item.options}
          />
        );
      })}
      <div>
        <TransferList left={left} right={right} setLeft={handleLeft} setRight={handleRight} />
      </div>
    </div>
  );
}

const SELECT = [
  {
    id: 'nameSelect',
    name: 'name',
    label: 'Name',
    options: [
      { value: 'all', text: '전체' },
      { value: 'gi', text: 'gi' },
      { value: 'am', text: 'am' },
    ],
  },
  {
    id: 'timeSelect',
    name: 'time',
    label: 'Time',
    options: [
      { value: 'all', text: '전체' },
      { value: '1', text: '1시' },
      { value: '2', text: '2시' },
    ],
  },
  {
    id: 'ageSelect',
    name: 'age',
    label: 'Age',
    options: [
      { value: 'all', text: '전체' },
      { value: '10', text: '10' },
      { value: '20', text: '20' },
    ],
  },
];

export default Work;
