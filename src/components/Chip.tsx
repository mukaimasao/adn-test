import React from 'react';
import Icon from './Icon';

interface ChipProps {
  icon?: string;
  gold?: boolean;
  children: React.ReactNode;
}

export default function Chip({ icon, gold, children }: ChipProps) {
  return (
    <span className={`chip${gold ? ' chip--gold' : ''}`}>
      {icon && <Icon name={icon} size={16} />}
      {children}
    </span>
  );
}
