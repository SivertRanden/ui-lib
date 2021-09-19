import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('renders successfully', () => {
    render(<Button text="buttonText" />);

    expect(screen.getByRole('button', { name: 'buttonText' })).toBeInTheDocument();
  });

  it('triggers onClick', () => {
    const mockOnClick = jest.fn();
    render(<Button text="buttonText" onClick={mockOnClick} />);

    userEvent.click(screen.getByRole('button', { name: 'buttonText' }));

    expect(mockOnClick).toBeCalled();
  });
});
