export interface ServiceRequestValues {
  fullName: string;
  email: string;
  phone: string;
  customerNumber: string;
  locality: string;
  message: string;
  services: string[];
  otherService: string;
}

export type ServiceRequestErrors = Partial<Record<keyof ServiceRequestValues, string>>;

export interface ServiceOption {
  value: string;
  label: string;
  icon: string;
}
