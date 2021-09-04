import React from 'react';

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

export default Button;
