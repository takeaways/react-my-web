import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
  it('Select render', () => {
    const handleChange = jest.fn();
    const props = {
      label: 'Age',
      value: '1',
      onChange: handleChange,
      options: [
        { value: '1', text: '1살' },
        { value: '2', text: '2살' },
      ],
    };
    render(<Select {...props} />);

    expect(screen.getByLabelText('Age')).toBeInTheDocument();
    fireEvent.click(screen.getByText(props.options[1].text));

    // expect()
  });
});
