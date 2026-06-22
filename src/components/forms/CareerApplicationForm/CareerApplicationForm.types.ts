export interface CareerApplicationValues {
  fullName: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  locality: string;
  district: string;
  experience: string;
  experienceYears: string;
  services: string[];
  availability: string;
  notes: string;
}

export type CareerApplicationErrors = Partial<Record<keyof CareerApplicationValues, string>>;

export interface CareerOption {
  value: string;
  label: string;
  icon?: string;
}
