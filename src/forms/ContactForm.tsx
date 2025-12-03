import { useState } from 'react';

import { Api } from '../features';

import type { Contact } from '../types';
import type { ContactFormData } from '../types';
import { contactFormInitialData } from '../init';

//refactor so API can provide next ID
const nextID = Api.getAllContacts().map((contact) =>
  contact ? parseInt(contact.id) : 0
);
console.log(nextID);
const newID = (Math.max(...nextID) + 1).toString();
console.log(newID);

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    id: { name: 'id', value: newID, type: 'id', label: 'ID' },
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
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    console.log('Form Data Held:', formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        ...(prevFormData[name as keyof ContactFormData] as any),
        value,
      },
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const contactData: Contact = {
      id: formData.id?.value || '',
      firstName: formData.firstName?.value,
      lastName: formData.lastName?.value,
      username: formData.username?.value,
      avatar: formData.avatar?.value,
      email: formData.email?.value || '',
      phone: formData.phone?.value,
    };
    Api.createContact(contactData);
    setFormData(contactFormInitialData);
  }

  return (
    <div className="flex flex-col justify-center  mb-4 basis-2/3 items-center p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, field]) => (
          <fieldset key={key} className="fieldset flex flex-col">
            <label hidden={field.type === 'id'} className="label">
              {field.label}:
            </label>
            {field.type === 'textarea' ? (
              <textarea
                onChange={handleChange}
                name={key}
                value={field.value}
                className="input textarea"
              />
            ) : (
              <input
                onChange={handleChange}
                hidden={field.type === 'id'}
                type={field.type}
                name={key}
                value={field.value}
                className="input"
              />
            )}
          </fieldset>
        ))}

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
