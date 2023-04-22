import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./views/AddContact.jsx";
import ContactList from "./views/ContactList.jsx";
import ContactContext from  "./contexts/Context.jsx";




// //importar createContext desde React

// export const ContactContext = createContext(); //creamos un contexto vacio


// //ContactContext es el nombre del contexto nada mas


const App = () => {
    
    return (
        //luego le pasamos el contextValue de la linea 32 como prop al value del Provider
        
        <ContactContext>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddContact />}></Route>
                <Route path="/contactList" element={<ContactList/>}></Route>
            </Routes>

            </BrowserRouter>
        </ContactContext>
    );
};

export default App;