import React, { createContext, useState} from "react";



//Iniciamos el contexto vacio
export const ContactContext = createContext();


const ContactProvider = ({ children }) => {

    const [contact, setContact] = useState({
        fullname:"",
        email:"",
        phone:"",
        address:"",
    });
    
    const [contactPlural, setContactPlural] = useState([]); 

    const [editingContact, setEditingContact] = useState(null);
    
    
    //el objeto contact interactua con el array de contactPlural
    const addContact = (contact) => {
        if (editingContact != null) {
            const newContactListEdited = contactPlural.filter((contact,index) => index != editingContact)
            setContactPlural([...newContactListEdited, contact])
            setEditingContact(null) // Esto es para que deje de editar
            return
        }
        setContactPlural ([...contactPlural, contact]);
    };
    
    
    // Una función que recibe un evento y modifica al contexto
    const handleChangeContext = (event) => {
        console.log(event.target.name);
        //formula para actualizar el contacto
        setContact ({...contact, [event.target.name]: event.target.value});
        console.log("modifique el contexto");
    };
    
    // Una funcion que borra un contacto
    // 
    const deleteContact = (index) => {
        const newListofContacts = contactPlural.filter ((contactSingular, i) => index !== i)
        console.log("probando boton pa borrar")
        setContactPlural(newListofContacts)
      };
    

    // Una funcion que edita un contacto

    
    const handleEditContact = (index) => {
        setEditingContact(index);
    };

    
    //declaramos un objeto con los valores de mi contexto
    const contextValue = {
        contacto: contact, // va de la mano con el use state de la linea 15
        funcionContexto: handleChangeContext, // va de la mano con la funcion de la linea 23
        addContact,
        contactPlural,
        deleteContact,
        handleEditContact,
    };

  

    return( 
        <ContactContext.Provider value={contextValue}>
            {children}
        </ContactContext.Provider>
    );

};

export default ContactProvider;


