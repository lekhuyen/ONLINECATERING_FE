import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch for Redux
import { createContact } from "../../redux/Information/contactSlice";


const Contact = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    content: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const now = new Date();
      const contactWithDate = {
        ...contact,
        responseDate: now.toISOString()
      };

      // Assuming createContact is an async action dispatched using Redux
      await dispatch(createContact(contactWithDate));

      setContact({
        fullName: "",
        email: "",
        phone: "",
        content: ""
      });

      setIsSubmitting(false);
      setShowModal(true); // Show modal on success
    } catch (error) {
      console.error("Error creating contact:", error);
      setSubmitError("Failed to send contact message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{ maxWidth: "400px" }}>
            <div className="card-body">
              <h4 className="card-title">Give Us The Juicy Deets! </h4>
              <p className="card-text">
                The beginning of your perfect event is having the best possible
                understanding of your vision. Let us know, in as much detail as
                you can, what you’re dreaming of and we’ll get the party
                started! YOU CAN ALSO FIND US HERE 714.942.6000 800.717.1545
                onlinecatering@gmail.com Online Catering and Events 150 Baker
                Street East Costa Mesa, CA 92626
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={contact.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content:
              </label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                value={contact.content}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitError && (
              <div className="text-danger mt-2">{submitError}</div>
            )}
          </form>
        </div>
      </div>

      {/* Modal for Success Message */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">
                Success!
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>Contact message sent successfully!</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
    </div>
  );
};

export default Contact;
