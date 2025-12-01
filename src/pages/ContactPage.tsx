import React from 'react';
import { Link, Outlet } from 'react-router';

const contacts = [
  // mock data
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    username: 'jane_doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    email: 'jane.doe@example.com',
    phone: '+1 555-1234',
    favorite: true,
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Smith',
    username: 'john_smith',
    avatar: 'https://i.pravatar.cc/150?img=12',
    email: 'john.smith@example.com',
    phone: '+1 555-5678',
    favorite: true,
  },
];

function ContactPage() {
  return (
    <div className="page-container p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Page</h1>
      <div className="flex flex-row ">
        <div className="mb-4 flex gap-4 flex-col ">
          <div className="p-4 flex flex-col gap-4">
            <button className="btn btn-primary">
              <Link to="/contacts/new" viewTransition>
                New
              </Link>
            </button>
            <div className="flex flex-col gap-1 mt-4">
              {contacts.map((contact) => (
                <button key={contact.id} className="justify-start">
                  <Link
                    className="btn btn-secondary"
                    to={`/contacts/${contact.id}`}
                    viewTransition
                  >
                    {contact.firstName} {contact.lastName}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="form p-4">
          <Outlet />
        </div>
        <div className="flex flex-col gap-6 basis-1/3 border justify-center items-center">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
