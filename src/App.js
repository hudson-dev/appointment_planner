import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
		CONTACTS: "/contacts",
		APPOINTMENTS: "/appointments",
		HOME: "/",
	};

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, number, email) => {
    let newContact = {
      name: name,
      number: number,
      email: email
    };
    setContacts((prev) => [...prev, newContact]);
  }

  const addAppointment = (title, contact, date, time) => {
    let newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    setAppointments((prev) => [...prev, newAppointment]);
  }

  return (
		<>
			<nav>
				<NavLink to={ROUTES.HOME} exact activeClassName="active">
					Home
				</NavLink>
				<NavLink to={ROUTES.CONTACTS} activeClassName="active">
					Contacts
				</NavLink>
				<NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
					Appointments
				</NavLink>
			</nav>
			<main>
				<Switch>
          <Route exact path={ROUTES.HOME}>
            <h1>Home Page</h1>
          </Route>
					<Route path={ROUTES.CONTACTS}>
						{/* Add props to ContactsPage */}
						<ContactsPage contacts={contacts} addContact={addContact} />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						{/* Add props to AppointmentsPage */}
						<AppointmentsPage
							appointments={appointments}
							contacts={contacts}
							addAppointment={addAppointment}
						/>
					</Route>
				</Switch>
			</main>
		</>
	);
}

export default App;
