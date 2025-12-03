// getAllContacts getContact, createContact, updateContact, deleteContact
// import types
import type { Contact } from '../types';
import dummyContacts from '../data/contacts';

// Improved version with error handling and type checks
export function getAllContacts() {
  try {
    let currentContacts: Contact[] | null = readContactsFromStorage();
    console.log(currentContacts);
    if (!Array.isArray(currentContacts)) {
      throw new Error('Expected contacts to be an array');
    }
    if (currentContacts.length === 0) {
      currentContacts = dummyContacts;
    }
    if (!writeContactsToStorage(currentContacts)) {
      throw new Error('Failed to write contacts to storage');
    }
    return currentContacts as Contact[];
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    throw error;
  }
}

export function getContact(id: string) {
  try {
    const allContacts: Contact[] = getAllContacts();
    if (allContacts === null) {
      throw new Error('No contacts available');
    }
    const foundContact = allContacts.find((contact: Contact) =>
      contact ? contact.id === id : null
    );
    if (foundContact) {
      return foundContact as Contact;
    } else return null;
  } catch (error) {
    console.error('Error retrieving contact:', error);
    throw error;
  }
}

export function createContact(newContact: Contact) {
  try {
    const currentContacts = getAllContacts();
    if (currentContacts === null) {
      throw new Error('No contacts available to add to');
    }
    currentContacts.push(newContact);
    writeContactsToStorage(currentContacts);
    return newContact as Contact;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
}

export function updateContact(
  id: string,
  updatedContact: Partial<Contact>
): Contact | null {
  try {
    const allContacts: Contact[] = getAllContacts();
    if (!allContacts || allContacts.length === 0)
      throw new Error('No contacts available to update');
    //find the index of the contact to update
    const contactIndex = allContacts.findIndex((contact) =>
      contact ? contact.id === id : false
    );
    if (contactIndex === -1) throw new Error('Contact not found');
    //get the existing contact
    const existingContact: Contact = allContacts[contactIndex];
    //update the record with new values
    const newContactRecord: Partial<Contact> = {
      ...existingContact,
      ...updatedContact,
    };
    //update the allContacts array
    allContacts[contactIndex] = newContactRecord as Contact;
    writeContactsToStorage(allContacts);
    return allContacts[contactIndex] || null;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
}

export function deleteContact(id: string): boolean {
  try {
    const allContacts: Contact[] = getAllContacts();
    if (!allContacts || allContacts.length === 0)
      throw new Error('No contacts available to delete from');
    //find the index of the contact to delete
    const contactIndex = allContacts.findIndex((contact: Contact) =>
      contact ? contact.id === id : false
    );
    if (contactIndex === -1) throw new Error('Contact not found');
    allContacts.splice(contactIndex, 1);
    writeContactsToStorage(allContacts);
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
}

function readContactsFromStorage(): Contact[] | null {
  try {
    const contactsJSON =
      localStorage.getItem('contacts') || JSON.stringify(dummyContacts);
    console.log(contactsJSON);
    if (contactsJSON) {
      return JSON.parse(contactsJSON);
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Failed to read contacts from storage: ' + error);
  }
}

function writeContactsToStorage(contacts: Contact[]): Contact[] | null {
  try {
    if (contacts === null) {
      throw new Error('No contacts provided to write to storage');
    }

    localStorage.setItem('contacts', JSON.stringify(contacts)) === undefined;

    return contacts;
  } catch (error) {
    throw new Error('Failed to write contacts to storage: ' + error);
    return null;
  }
}

export const Api = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
