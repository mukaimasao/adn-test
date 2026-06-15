'use client';

import React, { useRef } from 'react';
import Icon from './Icon';
import Button from './Button';

/* ---- Field wrapper ---- */
interface FieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  error?: string;
  full?: boolean;
  help?: string;
  children: React.ReactNode;
}

export function Field({ id, label, required, error, full, help, children }: FieldProps) {
  return (
    <div className={`field${error ? ' invalid' : ''}${full ? ' ffull' : ''}`}>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && (
            <span className="req" title="Campo obrigatório">
              *
            </span>
          )}
        </label>
      )}
      {children}
      {error && (
        <span className="err">
          <Icon name="alert" size={14} />
          {error}
        </span>
      )}
      {help && !error && <span className="help">{help}</span>}
    </div>
  );
}

/* ---- TextInput ---- */
interface TextInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  full?: boolean;
  help?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
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
  help,
  autoComplete,
  inputMode,
}: TextInputProps) {
  return (
    <Field id={id} label={label} required={required} error={error} full={full} help={help}>
      <input
        id={id}
        name={id}
        type={type}
        className="input"
        placeholder={placeholder}
        value={value || ''}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={!!error}
        aria-required={!!required}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  );
}

/* ---- Textarea ---- */
interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  full?: boolean;
  help?: string;
  rows?: number;
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
  help,
  rows = 4,
}: TextareaProps) {
  return (
    <Field id={id} label={label} required={required} error={error} full={full} help={help}>
      <textarea
        id={id}
        name={id}
        className="textarea"
        placeholder={placeholder}
        value={value || ''}
        rows={rows}
        aria-invalid={!!error}
        aria-required={!!required}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  );
}

/* ---- Select ---- */
interface SelectOption {
  value: string;
  label?: string;
}

interface SelectProps {
  id: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  options: (SelectOption | string)[];
  placeholder?: string;
  required?: boolean;
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
  placeholder = 'Selecione…',
  required,
  error,
  full,
  help,
}: SelectProps) {
  return (
    <Field id={id} label={label} required={required} error={error} full={full} help={help}>
      <select
        id={id}
        name={id}
        className="select"
        value={value || ''}
        aria-invalid={!!error}
        aria-required={!!required}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const lbl = typeof o === 'string' ? o : o.label || o.value;
          return (
            <option key={val} value={val}>
              {lbl}
            </option>
          );
        })}
      </select>
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
}

export function ChoiceGroup({
  type = 'checkbox',
  options,
  value,
  onChange,
  columns = 2,
  gold,
  name,
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
      className={`choices${columns === 2 ? ' choices--2' : ''}`}
      role={type === 'radio' ? 'radiogroup' : 'group'}
    >
      {options.map((o) => {
        const on = isOn(o.value);
        return (
          <label
            key={o.value}
            className={`choice${gold ? ' gold' : ''}${on ? ' on' : ''}`}
          >
            <input
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
  hint = 'PDF até 5 MB · opcional',
}: UploadProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        ref={ref}
        id={id}
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
          <b>{file ? file.name : 'Enviar currículo'}</b>
          <span>{file ? 'Clique para trocar o arquivo' : hint}</span>
        </span>
      </div>
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
            Enviar outra resposta
          </Button>
        </div>
      )}
    </div>
  );
}
