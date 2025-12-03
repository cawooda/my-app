import type { ContactFormData } from '../types';

export const contactFormInitialData: ContactFormData = {
  id: { name: 'id', value: '', type: 'id', label: 'ID' },
  firstName: {
    name: 'firstName',
    value: '',
    type: 'text',
    label: 'First Name',
  },
  lastName: { name: 'lastName', value: '', type: 'text', label: 'Last Name' },
  username: { name: 'username', value: '', type: 'text', label: 'Username' },
  avatar: { name: 'avatar', value: '', type: 'text', label: 'Avatar' },
  email: { name: 'email', value: '', type: 'email', label: 'Email' },
  phone: { name: 'phone', value: '', type: 'text', label: 'Phone' },
  message: { name: 'message', value: '', type: 'textarea', label: 'Message' },
};
