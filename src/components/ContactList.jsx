import React, { useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";
import axios from "axios";

export default function ContactList({ setFeaturedUser }) {
  const [contacts, setContacts] = useState([]);
  console.log("Contacts: ", contacts);
  useEffect(() => {
    axios("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      .then((data) => {
        {
          console.log(data.data);
          setContacts(data.data);
          setContacts(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} {...setFeaturedUser} />
        ))}
      </tbody>
    </table>
  );
}
