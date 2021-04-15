import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addBootcamps } from "../../../../js/actions/bootcampActions";
import './AddBootcamp.css'

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

function AddBootcamp() {
  const dispatch = useDispatch();
  const addBootcamp = (formData) => dispatch(addBootcamps(formData));

  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    setForm({
      title: "",
      description: "",
      image: "",
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
    addBootcamp(form);
    closeModal();
  };
  return (
    <React.Fragment>
      <Button color="warning" className="addModalBtcmp" onClick={openModal}>
        Add Bootcamp
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>"New bootcamp"</h2>
        <form onSubmit={handleSubmit} className="add-edit-form">
          <label>Title</label>
          <input
            onChange={handleChange}
            value={form.title}
            name="title"
            type="text"
            placeholder="Title..."
            required
          />
          <label>Description</label>
          <input
            onChange={handleChange}
            value={form.description}
            name="description"
            type="text"
            placeholder="Description..."
            required
          />
          <label>Image</label>
          <input
            onChange={handleChange}
            value={form.image}
            name="image"
            type="text"
            placeholder="Image..."
            required
          />
          <div>
            <button type="submit"className="btnEditModal">Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default AddBootcamp;
