import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [duplicate, setDuplicate] = useState(false);

	const handleSubmit = (e) => {
		/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
		e.preventDefault();

		if (duplicate === false) {
			addContact(name, phone, email);
			setName("");
			setPhone("");
			setEmail("");
		}
	};

	/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

	useEffect(() => {
		const result = contacts.find((element) => {
			return element.name === name;
		});
		if (result !== undefined) {
			setDuplicate(true);
		}
	}, [name]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList tiles={contacts} />
			</section>
		</div>
	);
};
