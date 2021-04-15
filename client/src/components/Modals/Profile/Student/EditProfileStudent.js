import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../js/actions/userActions";
import "./EditProfileStudent.css";

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
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditProfileStudent({oldUser, _id }) {
  const dispatch = useDispatch();
  const editUserById = (id, formData) => dispatch(editUser(id, formData));
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    imgProfile:""
  });

  useEffect(() => {
    setForm(oldUser);
  }, [modalIsOpen, oldUser]);

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
    editUserById(_id, form);
    closeModal();
  };
  return (
    <div>
      <React.Fragment>
        <Button onClick={openModal}>
          Edit profile
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>Edit profile</h2>
          <form onSubmit={handleSubmit} className="add-edit-form">
            <label>First name</label>
            <input
              onChange={handleChange}
              value={form.firstName}
              name="firstName"
              type="text"
              placeholder="Enter your name..."
              required
            />
            <label>Last name</label>
            <input
              onChange={handleChange}
              value={form.lastName}
              name="lastName"
              type="text"
              placeholder="Enter your last name name..."
              required
            />
            <label>Email</label>
            <input
              onChange={handleChange}
              value={form.email}
              name="email"
              type="email"
              placeholder="Enter your email..."
              required
            />
              <label>Password</label>
             <input
              onChange={handleChange}
              value={form.password}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
              <label>Image profile</label>
             <input
              onChange={handleChange}
              value={form.imgProfile}
              name="imgProfile"
              type="text"
              placeholder="imgProfile"
              required
            />
            <div>
              <button type="submit" className="btnEditModal">
                Confirm
              </button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default EditProfileStudent;
