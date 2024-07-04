import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../fonts.css";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ik4qce8";
    const templateId = "template_qx539ke";
    const publicKey = "eb5-jLe-BS_5CL1Nf";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Design Club",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully", response);
        setName("");
        setEmail("");
        setMessage("");
        alert("Email sent succesfully");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5  px-10 py-10 justify-center w-full items-center"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="poppins-regular bg-white px-4 py-2 rounded-lg shadow-xl w-full"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="poppins-regular bg-white px-4 py-2 rounded-lg shadow-xl w-full"
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        value={message}
        placeholder="Enter your message"
        onChange={(e) => setMessage(e.target.value)}
        className="poppins-regular bg-white px-4 py-2 rounded-lg shadow-xl w-full"
      />
      <button
        type="submit"
        className="bg-[#ff1f25] cursor-pointer py-2 rounded-xl w-fit px-4 text-xl poppins-medium text-white"
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;
