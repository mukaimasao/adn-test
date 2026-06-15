import React from 'react';
import Icon from './Icon';

interface PhotoProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Photo({ label, className = '', style }: PhotoProps) {
  return (
    <div className={`ph ${className}`} style={style}>
      <span className="ph__tag">
        <Icon name="image" size={15} />
        {label || 'foto'}
      </span>
    </div>
  );
}
