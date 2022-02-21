// import React from 'react'

// function Enter() {
//   return (
//     <div className='container'>
//       <div className=" mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Book Name</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Book Name"/>
// </div>
// <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">Author Name</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Author Name"/>
// </div>
// <div className="mb-3">
//   <label for="exampleFormControlInput1" className="form-label">BooK Id</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ID of Book"/>
// </div>
// <button type="button" className="btn btn-primary">Primary</button>

//     </div>

//   )
// }

// export default Enter
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Enter = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    BooksofName: "",
    Author: "",
    BooksofName: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    BooksofName: "",
    Author: "",
    Booksofid: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      BooksofName: addFormData.BooksofName,
      Author: addFormData.Author,
      Booksofid: addFormData.Booksofid,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      BooksofName: editFormData.BooksofName,
      Author: editFormData.Author,
      Booksofid: editFormData.Booksofid,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      BooksofName: contact. BooksofName,
      Author: contact.Author,
      Booksofid: contact.Booksofid,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name of Book</th>
              <th>Author</th>
              <th>Book Id</th>
              <th>Emiail id of Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add Of Books</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Author"
          required="required"
          placeholder="Author name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Bookofid"
          required="required"
          placeholder="Enter Book ID..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Enter;