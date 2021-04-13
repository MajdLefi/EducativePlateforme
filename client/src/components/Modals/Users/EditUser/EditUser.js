import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../js/actions/userActions";
import "./EditUser.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "#f9f9f9",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 999,
    width: "100vw",
  },
};

Modal.setAppElement("#root");

function EditUser() {
  const dispatch = useDispatch();
  const editUserById = (id, formData) => dispatch(editUser(id, formData));
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "Student",
    });
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUserById(form);
    closeModal();
  };

  return (
    <div>
      <React.Fragment>
        <Button color="warning" className="editModal" onClick={openModal}>
          Edit
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>USER</h2>
          <form onSubmit={handleSubmit} className="add-edit-form">
            <label>NAME</label>
            <input
              onChange={handleChange}
              value={form.firstName}
              name="firstName"
              type="text"
              placeholder="Enter your name..."
              required
            />
            <label>LAST NAME</label>
            <input
              onChange={handleChange}
              value={form.lastName}
              name="lastName"
              type="text"
              placeholder="Enter your last name name..."
              required
            />
            <label>EMAIL</label>
            <input
              onChange={handleChange}
              value={form.email}
              name="email"
              type="email"
              placeholder="Enter your email..."
              required
            />
            <label>password</label>
            <input
              onChange={handleChange}
              value={form.password}
              name="password"
              type="tel"
              pattern="[0-9]{8,}"
              required
              placeholder="Enter your phone..."
            />
            <div>
              <button type="submit">Confirm</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default EditUser;
