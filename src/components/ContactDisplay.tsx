import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';

//data
import { Api } from '../features';

//types
import type { Contact } from '../types';

function ContactDisplay(): React.ReactElement {
  const { contactId } = useParams();
  useEffect(() => {}, []);
  const [contact, setContact] = useState<Contact>(null);
  useEffect(() => {
    if (!contactId) return;
    const foundContact: Contact = Api.getContact(contactId);
    setContact(foundContact || null);
  }, [contactId]);

  if (contact === null) return <div className="error">Contact not found</div>;
  return (
    <div className="shadow-md p-4 flex flex-col backdrop-brightness-90 shadow-2xl basis-2/3 items-center rounded-lg">
      <img
        src={contact.avatar}
        alt={`${contact.firstName} ${contact.lastName}`}
        className="w-16 h-16 rounded-full mb-3"
      />

      <div>
        <p className="text-gray-600  rounded-full">ID: {contact.id}</p>
        <h2 className="text-xl font-semibold">
          {contact.firstName} {contact.lastName}
        </h2>
        <p className="text-gray-600">@{contact.username}</p>
        <p className="text-gray-600">{contact.email}</p>
        <p className="text-gray-600">{contact.phone}</p>
        <p className="text-gray-600">
          Favorite: {contact.favorite ? 'Yes' : 'No'}
        </p>

        <p className="text-gray-600">Username: {contact.username}</p>
      </div>
    </div>
  );
}

export default ContactDisplay;
