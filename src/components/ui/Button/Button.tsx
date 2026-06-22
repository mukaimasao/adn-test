import React from 'react';
import Icon from '../Icon';
import { cn } from '@/lib/cn';

interface ButtonProps {
  variant?: 'primary' | 'gold' | 'ghost' | 'outline-green' | 'text';
  size?: 'lg' | 'default';
  block?: boolean;
  icon?: string;
  iconRight?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size,
  block,
  icon,
  iconRight,
  href,
  onClick,
  type,
  children,
  className = '',
}: ButtonProps) {
  const cls = cn(
    'btn',
    `btn--${variant}`,
    size === 'lg' && 'btn--lg',
    block && 'btn--block',
    className,
  );

  const inner = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type || 'button'} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
