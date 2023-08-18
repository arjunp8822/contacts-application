import React from "react";
import "./css/ContactCard.css";
import { AiOutlineRight, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="contact-name-container">
          <div className="contact-icon">{props.initials}</div>
          <h3>{props.name}</h3>
        </div>
        <div className="contact-button">
          <AiOutlineRight />
        </div>
      </div>
      <div className="contact-email">
        <AiOutlineMail />
        <p>{props.email}</p>
      </div>
      <div className="contact-phone">
        <AiOutlinePhone />
        <p>{props.phone}</p>
      </div>
      <div className="contact-company">
        <HiOutlineBuildingOffice />
        <h5>{props.company}</h5>
      </div>
    </div>
  );
};

export default ContactCard;
