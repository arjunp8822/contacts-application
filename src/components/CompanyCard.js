import React from "react";
import "./css/ContactCard.css";
import { PiStrategy } from "react-icons/pi";
import { MdBusiness } from "react-icons/md";

const CompanyCard = (props) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="contact-name-container">
          <div className="contact-icon">{props.initials}</div>
          <h3>{props.name}</h3>
        </div>
      </div>
      <div className="contact-email">
        <MdBusiness />
        <p>{props.catchPhrase}</p>
      </div>
      <div className="contact-phone">
        <PiStrategy />
        <p>{props.bs}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
