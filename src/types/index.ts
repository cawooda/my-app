export type Contact = {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  avatar?: string;
  email: string;
  phone?: string;
  favorite?: boolean;
} | null;

export type FormField = {
  name: string;
  value: string;
  type: string;
  label?: string;
};

export type ContactFormData = {
  id: FormField;
  firstName?: FormField | undefined;
  lastName?: FormField | undefined;
  username?: FormField | undefined;
  avatar?: FormField | undefined;
  phone?: FormField | undefined;
  email?: FormField;
  message?: FormField | undefined;
};
