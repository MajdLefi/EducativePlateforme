import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { editBootcamp } from "../../../../js/actions/bootcampActions";
import "./EditBootcamp.css";

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

function EditBootcamp({ oldBootcamp, _id }) {
  const dispatch = useDispatch();
  const editBootcamps = (id, formData) => dispatch(editBootcamp(id, formData));
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    setForm(oldBootcamp);
  }, [modalIsOpen, oldBootcamp]);
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
    editBootcamps(_id, form);
    closeModal();
  };
  return (
    <React.Fragment>
      <Button>
        <i class="fas fa-edit" onClick={openModal}></i>
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Edit bootcamp</h2>
        <form onSubmit={handleSubmit} className="add-edit-form">
          <label>Title</label>
          <input
            onChange={handleChange}
            value={form.title}
            name="title"
            type="text"
            placeholder="Enter your name..."
            required
          />
          <label>Description</label>
          <input
            onChange={handleChange}
            value={form.description}
            name="description"
            type="text"
            placeholder="Enter your last name name..."
            required
          />
          <label>Image</label>
          <input
            onChange={handleChange}
            value={form.image}
            name="image"
            type="text"
            placeholder="Enter your email..."
            required
          />
          <div>
            <button type="submit">Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default EditBootcamp;
