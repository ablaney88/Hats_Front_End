import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './ClientForm.css'

const ClientForm = ({ hats, clients, onCreate, foundHat }) => {
  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    address1: "",
    address2: "",
    postcode: "",
    country: "",
    hourlyRate: "",
    hat: foundHat,
  });

  const handleChange = (event) => {
    const propertyName = event.target.name;
    const copyClient = { ...newClient };
    copyClient[propertyName] = event.target.value;
    setNewClient(copyClient);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(newClient);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      First Name:{" "}
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      Last Name:{" "}
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />
      E-mail:{" "}
      <input
        type="email"
        placeholder="email"
        name="emailAddress"
        onChange={handleChange}
      />
      Address:{" "}
      <input
        type="text"
        placeholder="First line of address"
        name="address1"
        onChange={handleChange}
      />
      Address:{" "}
      <input
        type="text"
        placeholder="Second line of address"
        name="address2"
        onChange={handleChange}
      />
      Postcode:{" "}
      <input
        type="text"
        placeholder="Postcode"
        name="postcode"
        onChange={handleChange}
      />
      Country:{" "}
      <input
        type="text"
        placeholder="country"
        name="country"
        onChange={handleChange}
      />
      Hourly Rate: £
      <input
        type="number"
        placeholder="Hourly rate"
        name="hourlyRate"
        onChange={handleChange}
      />
      <div className="button"><button type="submit">Save</button></div>
    </form>
  );
};

export default ClientForm;
