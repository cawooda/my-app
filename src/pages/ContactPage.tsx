import { Link, Outlet } from 'react-router';
import { useEffect } from 'react';

import type { Contact } from '../types';
import { Api } from '../features';
import ContactList from '../components/ContactList';
import ContactLink from '../components/ContactLink';

const contacts = Api.getAllContacts();

function ContactPage() {
  useEffect(() => {
    const contacts = Api.getAllContacts();
    console.log('Contacts Loaded:', contacts);
  }, []);

  if (contacts != null)
    return (
      <div className=" p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Page</h1>

        <div className="mb-4 flex gap-4 flex-col basis-1/3 test ">
          <Link className="btn btn-primary" to="/contacts/new" viewTransition>
            New
          </Link>

          <div className="flex flex-row gap-1 flex-wrap mt-4 test">
            {contacts.map((contact: Contact) => {
              if (!contact) return null;
              return <ContactLink key={contact.id} contact={contact} />;
            })}
          </div>
        </div>
        <Outlet />

        {contacts ? <ContactList contacts={contacts} /> : null}
      </div>
    );
  else return <div>Loading Contacts...</div>;
}

export default ContactPage;
