import React from 'react';
import Image from 'next/image';
import Icon from '../Icon';

interface PhotoProps {
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Photo({ label, src, alt = '', className = '', style }: PhotoProps) {
  return (
    <div className={`ph ${className}`} style={style}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 900px) 45vw, 100vw" className="object-cover" />
      ) : (
        <span className="ph__tag">
          <Icon name="image" size={15} />
          {label || 'visuel'}
        </span>
      )}
    </div>
  );
}
