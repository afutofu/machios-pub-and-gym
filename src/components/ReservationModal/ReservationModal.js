import React, { useState, useEffect } from "react";

import classes from "./ReservationModal.module.css";

const ReservationModal = (props) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onReserveSubmit = () => {
    setEmail("");
    setSent(true);
  };

  const onModalClose = () => {
    setEmail("");
    props.onReserveModalClose();
  };

  const onModalClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.ReservationModal} onClick={onModalClose}>
      <div className={classes.ReservationBox} onClick={onModalClick}>
        <div className={classes.Container}>
          <h2 className={classes.Title}>Reserve A Seat</h2>
          <p className={classes.Desc}>
            Enter your email. We will inquire your reservation details once we
            are available.
          </p>
          <input
            className={classes.Input}
            onChange={onEmailChange}
            value={email}
            placeholder="johndoe@xmail.com"
          />
          <button className={classes.Button} onClick={onReserveSubmit}>
            Reserve
          </button>
          {sent ? (
            <p className={classes.Notification}>
              Email has been sent. We will get back to you once we are
              avaialble, thank you for your time.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
