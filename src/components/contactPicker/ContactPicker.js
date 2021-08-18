import React, { useEffect } from "react";

export const ContactPicker = ({contacts, onChange}) => {
  
  // useEffect(() => {
  //   console.log("ContactPicker:");
  //   console.log(contacts);
  // }); 

  return (
		<select onChange={onChange}>
      <option value={""} key={-1} selected>
        No Contact Selected
      </option>
      {
        contacts.map((contact) => {
          return <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        })
      }
		</select>
	);
};
