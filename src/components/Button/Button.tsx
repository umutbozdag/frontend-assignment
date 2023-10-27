import { MouseEvent, ReactNode } from 'react';
import cn from 'classnames/bind';
import styles from './Button.module.scss';

const cx = cn.bind(styles);

type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  type?: ButtonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: ReactNode;
};

const Button = ({
  type = 'primary',
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  const buttonClass = cx('button', {
    primary: type === 'primary',
    secondary: type === 'secondary',
    disabled,
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
