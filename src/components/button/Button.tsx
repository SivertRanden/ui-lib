import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return <button className={styles.button}>{text}</button>;
};
