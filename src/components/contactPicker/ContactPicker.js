import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  
  return (
		<select onChange={onChange}>
      <option value={""} key={-1} selected>
        No Contact Selected
      </option>
      {
        contacts.map((contact) => {
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        })
      }
		</select>
	);
};
