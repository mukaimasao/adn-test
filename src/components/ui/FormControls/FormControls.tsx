'use client';

import React, { useRef } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import { cn } from '@/lib/cn';

/* ---- Field wrapper ---- */
interface FieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  full?: boolean;
  help?: string;
  children: React.ReactNode;
}

export function Field({ id, label, required, optional, error, full, help, children }: FieldProps) {
  return (
    <div className={`field${error ? ' invalid' : ''}${full ? ' ffull' : ''}`}>
      {label && (
        <label htmlFor={id}>
          <span>
            {label}
            {required && (
              <span className="req" title="Champ obligatoire" aria-label="champ obligatoire">
                *
              </span>
            )}
          </span>
          {optional && <span className="optional">Facultatif</span>}
        </label>
      )}
      {children}
      {error && (
        <span className="err" id={`${id}-error`} role="alert">
          <Icon name="alert" size={14} />
          {error}
        </span>
      )}
      {help && !error && <span className="help" id={`${id}-help`}>{help}</span>}
    </div>
  );
}

/* ---- TextInput ---- */
interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  id: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  full?: boolean;
  optional?: boolean;
  help?: string;
}

export function TextInput({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  error,
  full,
  optional,
  help,
  autoComplete,
  inputMode,
  className,
  ...inputProps
}: TextInputProps) {
  return (
    <Field id={id} label={label} required={required} optional={optional} error={error} full={full} help={help}>
      <input
        id={id}
        name={id}
        type={type}
        className={cn('input', className)}
        placeholder={placeholder}
        value={value || ''}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={!!error}
        aria-required={!!required}
        aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
      />
    </Field>
  );
}

/* ---- Textarea ---- */
interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
  id: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  full?: boolean;
  optional?: boolean;
  help?: string;
}

export function Textarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  required,
  error,
  full = true,
  optional,
  help,
  rows = 4,
  className,
  ...textareaProps
}: TextareaProps) {
  return (
    <Field id={id} label={label} required={required} optional={optional} error={error} full={full} help={help}>
      <textarea
        id={id}
        name={id}
        className={cn('textarea', className)}
        placeholder={placeholder}
        value={value || ''}
        rows={rows}
        aria-invalid={!!error}
        aria-required={!!required}
        aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
        onChange={(e) => onChange(e.target.value)}
        {...textareaProps}
      />
    </Field>
  );
}

/* ---- Select ---- */
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  full?: boolean;
  help?: string;
}

export function Select({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = 'Choisissez une option',
  required,
  optional,
  error,
  full,
  help,
}: SelectProps) {
  return (
    <Field id={id} label={label} required={required} optional={optional} error={error} full={full} help={help}>
      <div className="select-wrap">
        <select
          id={id}
          name={id}
          className="input select"
          value={value}
          required={required}
          aria-invalid={!!error}
          aria-required={!!required}
          aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon name="chevronDown" size={18} />
      </div>
    </Field>
  );
}

/* ---- ChoiceGroup ---- */
interface ChoiceOption {
  value: string;
  label: string;
  icon?: string;
}

interface ChoiceGroupProps {
  type?: 'checkbox' | 'radio';
  name: string;
  options: ChoiceOption[];
  value: string | string[];
  onChange: (v: string | string[]) => void;
  columns?: number;
  gold?: boolean;
  ariaDescribedBy?: string;
  invalid?: boolean;
}

export function ChoiceGroup({
  type = 'checkbox',
  options,
  value,
  onChange,
  columns = 2,
  gold,
  name,
  ariaDescribedBy,
  invalid,
}: ChoiceGroupProps) {
  const isOn = (v: string) =>
    type === 'checkbox' ? (value as string[]).includes(v) : value === v;

  const toggle = (v: string) => {
    if (type === 'radio') {
      onChange(v);
      return;
    }
    const cur = (value as string[]) || [];
    onChange(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
  };

  return (
    <div
      className={`choices${columns === 2 ? ' choices--2' : ''}${columns === 3 ? ' choices--3' : ''}`}
      role={type === 'radio' ? 'radiogroup' : 'group'}
      aria-describedby={ariaDescribedBy}
      aria-invalid={invalid || undefined}
    >
      {options.map((o) => {
        const on = isOn(o.value);
        return (
          <label
            key={o.value}
            className={`choice${gold ? ' gold' : ''}${on ? ' on' : ''}`}
          >
            <input
              id={`${name}-${o.value}`}
              type={type}
              name={name}
              checked={on}
              value={o.value}
              onChange={() => toggle(o.value)}
            />
            {o.icon && (
              <span className="ic">
                <Icon name={o.icon} size={20} />
              </span>
            )}
            <span>{o.label}</span>
            <span className={`tick${type === 'radio' ? ' radio' : ''}`}>
              <Icon name="check" size={13} stroke={3} />
            </span>
          </label>
        );
      })}
    </div>
  );
}

/* ---- Upload ---- */
interface UploadProps {
  id: string;
  file: File | null;
  onFile: (f: File | null) => void;
  accept?: string;
  hint?: string;
}

export function Upload({
  id,
  file,
  onFile,
  accept = '.pdf',
  hint = 'PDF jusqu’à 5 Mo · facultatif',
}: UploadProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        ref={ref}
        id={id}
        name={id}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => onFile(e.target.files?.[0] || null)}
      />
      <div
        className={`upload${file ? ' has-file' : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => ref.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            ref.current?.click();
          }
        }}
      >
        <span className="upload__ic">
          <Icon name={file ? 'file' : 'upload'} size={22} />
        </span>
        <span>
          <b>{file ? file.name : 'Joindre mon CV'}</b>
          <span>{file ? 'Cliquez pour remplacer le fichier' : hint}</span>
        </span>
      </div>
    </div>
  );
}

/* ---- Checkbox ---- */
interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function Checkbox({ id, checked, onChange, required, error, children }: CheckboxProps) {
  return (
    <div className={`field${error ? ' invalid' : ''}`}>
      <label htmlFor={id} className="consent">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          aria-required={!!required}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <span className="consent__tick">
          <Icon name="check" size={13} stroke={3} />
        </span>
        <span className="consent__label">{children}</span>
      </label>
      {error && (
        <span className="err" id={`${id}-error`} role="alert">
          <Icon name="alert" size={14} />
          {error}
        </span>
      )}
    </div>
  );
}

/* ---- FormSuccess ---- */
interface FormSuccessProps {
  title: string;
  onReset?: () => void;
  children: React.ReactNode;
}

export function FormSuccess({ title, children, onReset }: FormSuccessProps) {
  return (
    <div className="form-success">
      <div className="form-success__ic">
        <Icon name="checkCircle" size={40} />
      </div>
      <h3 className="sec-title" style={{ fontSize: 26 }}>
        {title}
      </h3>
      <p className="sec-sub" style={{ margin: '12px auto 0' }}>
        {children}
      </p>
      {onReset && (
        <div style={{ marginTop: 22 }}>
          <Button variant="ghost" onClick={onReset} icon="arrow">
            Envoyer une autre réponse
          </Button>
        </div>
      )}
    </div>
  );
}
