export interface CareerApplicationValues {
  hoursWanted: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;
  phone: string;
  privacyConsent: boolean;
}

export type CareerApplicationErrors = Partial<Record<keyof CareerApplicationValues, string>>;

export interface CareerOption {
  value: string;
  label: string;
}
