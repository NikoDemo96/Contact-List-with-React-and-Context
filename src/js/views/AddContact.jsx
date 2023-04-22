import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "../contexts/Context.jsx";

//importamos useContext y lo declaramos en la linea 12

const AddContact = () => {
  const navigate = useNavigate();
  // declaramos useNavigate

  // Declaramos mi contexto
  const context = useContext(ContactContext); //--> vale lo que vale el context de app.jsx
  console.log(context);
  // Reemplazando mi estado local por el del contexto
  // Reemplazando mi funcion local por la del contexto
  const contact = context.contacto;
  const handleChange = context.funcionContexto;

  console.log("CONTEXTO", context);

  const redirectOnContactList = () => {
    console.log("lo redireccione al contact list");
    navigate("/contactList");
  };

  const saveOnContactList = () => {
    context.addContact(contact);
    redirectOnContactList();
  };

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center">
        <h1>Add a new contact</h1>
      </div>
      <div className="card w-75 m-auto my-5">

        <div className="card-body">
          <label for="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={contact.fullname}
            onChange={(event) => handleChange(event)}
            className="form-control"
            placeholder="Full Name"
          />
          <label for="address">Address</label>
          <input
            type="address"
            name="address"
            value={contact.address}
            onChange={(event) => handleChange(event)}
            className="form-control"
            placeholder="Enter address"
          />
          <label for="phone">Phone</label>
          <input
            type="number"
            name="phone"
            value={contact.phone}
            onChange={(event) => handleChange(event)}
            className="form-control"
            placeholder="Enter phone"
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={(event) => handleChange(event)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => saveOnContactList()}
        >
          Save
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => redirectOnContactList()}
        >
          Get back to contact list
        </button>
      </div>
    </div>
  );
};

export default AddContact;
