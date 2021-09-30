import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';


  const Title = styled.h1`
  color: white;
  font-size: 30 px;
  text-align: center;
  `
  const Paragraph = styled.p`
text-align: center;
color: white;
`
const App = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("marieform", {
      name,
      firstname,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("Marie", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setFirstName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <form className="contact-form">
      <Title>Contactez-nous</Title>
      <Paragraph>My form is for Titouan. The library is styled-component. We have firstname*, name*, mail* and phone for the user. I use EmailJS (I use Front-end withtout using back-end nor Xamp.</Paragraph>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="firstname *"
          value={firstname}
          autoComplete="off"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
         
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default App;




