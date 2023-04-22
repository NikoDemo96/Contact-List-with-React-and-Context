import React, { useContext } from "react";
import { ContactContext } from "../contexts/Context.jsx";
import { useNavigate } from "react-router";

const ContactList = () => {
  const navigate = useNavigate();
  const context = useContext(ContactContext);
  console.log("lista vacia?", context);

  const redirectOnAddContact = () => {
    console.log("lo redireccione para anadir un contacto nuevo");
    navigate("/");
  };

const deleteFromContactList = (index) => {
  context.deleteContact(index)
  console.log("probando boton pa borrar en serio")
  
};

const editFromContactList = (index) => {
  context.handleEditContact(index)
  navigate("/");
  console.log("probando boton pa editar 2")
};


  return (
    <div className="m-3">
      <div className="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-success"
          onClick={() => redirectOnAddContact()}
        >
          Add new contact
        </button>
      </div>
      {context.contactPlural.map((contact, index) => {
        return (
          <div className="card w-75 m-auto my-5 d-flex flex-row">
            <div className="m-4">
              <img
                src="https://picsum.photos/220"
                className="rounded-circle"
                alt="..."
              />
            </div>
            <div className="align-self-center m-4">
              <p className="fs-5">{contact.fullname}</p>
              <div className="d-flex gap-2"><i class="fas fa-map-marker-alt"></i><p>{contact.address}</p></div>
              <div className="d-flex gap-2"><i class="fas fa-phone"></i><p>{contact.phone}</p></div>
              <div className="d-flex gap-2"><i class="fas fa-envelope"></i><p>{contact.email}</p></div>
            </div>
            <div className="d-flex ms-auto p-4">
              <div className="m-3">
                <i className="fas fa-pencil-alt" onClick={() => editFromContactList(index)}></i>
              </div>
              <div className="m-3">
                <i className="fas fa-trash-alt" onClick={() => deleteFromContactList(index)}></i>  
                {/* el index sale de la linea 54 hasta la linea 15. Lo recibo en la linea 15 y luego se lo paso a la linea 16. */}
              </div>
            </div>
          </div>
        );
      })};
      
    </div>
  );
};

export default ContactList;
