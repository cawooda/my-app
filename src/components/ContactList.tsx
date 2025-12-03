import React, { type ComponentProps, type ReactElement } from 'react';
import type { Contact } from '../types';

function ContactList({ contacts }: { contacts: Contact[] }): ReactElement {
  return (
    <div className="gap-4 flex flex-row flex-wrap justify-center">
      {typeof contacts[0] !== 'undefined'
        ? contacts.map(
            (contact: Contact | null) =>
              contact && (
                <div
                  key={contact.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-wrap items-center  space-x-4"
                >
                  <img
                    src={contact.avatar}
                    alt={`${contact.firstName} ${contact.lastName}`}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="text-gray-600">@{contact.username}</p>
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="text-gray-600">{contact.phone}</p>
                  </div>
                </div>
              )
          )
        : null}
    </div>
  );
}

export default ContactList;
