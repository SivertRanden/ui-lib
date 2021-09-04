import classnames from 'classnames';
import React from 'react';
import { ThemeProps } from '../../types/ThemeProps';
import styles from './Button.module.scss';

export type ButtonProps = ThemeProps & {
  /* Text to show in the button */
  text?: string;
  variant?: 'outline' | 'solid' | 'underline';
};

export const Button = ({ text, variant = 'solid', size = 'm' }: ButtonProps) => {
  return (
    <button className={classnames(styles.button, styles[variant], styles[size])}>{text}</button>
  );
};
