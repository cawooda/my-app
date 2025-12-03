import React from 'react';
import { Link } from 'react-router';
import type { Contact } from '../types';

function ContactLink({ contact }: { contact: Contact }): React.ReactElement {
  if (contact === null) return <></>;
  return (
    <button key={contact.id} className="justify-start">
      <Link
        className="btn btn-secondary"
        to={`/contacts/${contact.id}`}
        viewTransition
      >
        {contact.firstName} {contact.lastName}
      </Link>
    </button>
  );
}
export default ContactLink;
