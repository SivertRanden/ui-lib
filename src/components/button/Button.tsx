import classnames from 'classnames';
import React from 'react';
import { CommonProps } from '../../types/CommonProps';
import styles from './Button.module.scss';

export type ButtonProps = Pick<CommonProps, 'size'> & {
  /* Text to show in the button */
  text?: string;
  /* Visual style of the button */
  variant?: 'outline' | 'solid' | 'text';
  onClick?: React.MouseEventHandler;
};

export const Button = ({
  text,
  variant = 'solid',
  size = 'm',
  ...htmlButtonProps
}: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, styles[variant], styles[size])}
      {...htmlButtonProps}
    >
      {text}
    </button>
  );
};
