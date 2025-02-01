import React from "react";

export default function ContactRow({ contact, setFeaturedUser }) {
  return (
    <tr onClick={() => setFeaturedUser(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
