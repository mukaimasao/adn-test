export interface ServiceRequestValues {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  email: string;
  phone: string;
  pluxeeNumber: string;
  hoursWanted: string;
  availableDays: string[];
  comment: string;
  privacyConsent: boolean;
}

export type ServiceRequestErrors = Partial<Record<keyof ServiceRequestValues, string>>;

export interface DayOption {
  value: string;
  label: string;
}
