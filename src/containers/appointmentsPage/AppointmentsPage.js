import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = ({
	appointments,
	contacts,
	addAppointment,
}) => {
	/*
	Define state variables for 
	appointment info
	*/
	const [title, setTitle] = useState("");
	const [contact, setContact] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
		Add contact info and clear data  
		*/
		addAppointment(title, contacts, date, time);
		setTitle("");
		setContact("");
		setDate("");
		setTime("");
	};

	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				<AppointmentForm
					title={title}
					setTitle={setTitle}
					contact={contact}
					setContact={setContact}
					date={date}
					setDate={setDate}
					time={time}
					setTime={setTime}
					contacts={contacts}
					handleSubmit={handleSubmit}
				></AppointmentForm>
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
				<TileList tiles={appointments}></TileList>
			</section>
		</div>
	);
};
