import React from "react";
import ReactDOM from "react-dom";
import Invitation from "./Invitation";
import Form from "./ContactForm";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <Invitation />
      <Form />
    </div>
  );
}
