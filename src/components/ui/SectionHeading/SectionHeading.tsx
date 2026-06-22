import React from 'react';
import Icon from '../Icon';

interface SectionHeadProps {
  eyebrow?: string;
  eyebrowIcon?: string;
  title: string;
  accent?: string;
  sub?: string | null;
  center?: boolean;
  rule?: boolean;
}

export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  accent,
  sub,
  center,
  rule = true,
}: SectionHeadProps) {
  return (
    <div className={`sec-head reveal${center ? ' sec-head--center' : ''}`}>
      {eyebrow && (
        <span
          className={`eyebrow${rule ? ' eyebrow--rule' : ''}${center ? ' eyebrow--center' : ''}`}
        >
          {eyebrowIcon && <Icon name={eyebrowIcon} size={16} />}
          {eyebrow}
        </span>
      )}
      <h2 className="sec-title">
        {accent ? (
          <>
            {title} <span className="accent">{accent}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  );
}
