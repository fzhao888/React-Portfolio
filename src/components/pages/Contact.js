import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

function Contact() {
  // Create state variables in the form and sets default value to empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disable,setDisable] = useState(true);

  const handleInputChange = (e) => {
    // gets the input name and input value from name and value
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    //checks which input name we are modifying
    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    } 
  };

  // handles clicking in and out 
  const handleEmpty = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    setErrorMessage('');

    // checks for empty fields
    if(inputValue.trim().length === 0){
      setErrorMessage(`${inputName} is required!`);
      setDisable(true);
      return;
    } 
    
    // checks if email is invalid
    if(email.trim().length > 0 && !validateEmail(email)){
      setErrorMessage('email is invalid!');
      setDisable(true);
      return;
    }

    // checks for empty message
    if(message.trim().length  === 0){
        setDisable(true);
        return;
    }

    // enable submit button if checks passed
    setDisable(false);
  }

  // validates email and form is filled out
  const handleFormSubmit = (e) => {
    e.preventDefault();

   
    if (!name) {
      setErrorMessage('name field is empty!');
      return;
    }

    if (!email) {
      setErrorMessage('email field is empty!');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('email is invalid!');
      return;
    }


    if (!message) {
      setErrorMessage('message field is empty!');
      return;
    }

    setErrorMessage('Message submitted!');

    // clears inputs 
    setName('');
    setEmail('');
    setMessage(''); 
  };
  return (
    <div className="contact" >
      <h2>Contact</h2>
      <form>
        <section class='row'>
          <section className='col form-group'>
            <label className='form-label'> Name: </label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleEmpty}
              type="text"
              className='form-control'
            />
          </section>
        </section>

        <label className='form-label'> Email: </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleEmpty}
          type="email"
          className='form-control'
        />

        <section className='form-group'>
          <label className='form-label'> Message: </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleEmpty}
            type="text"
            rows='5'
            className='form-control'
          />
        </section>

        <section className='form-group text-center'>
          <button type="button" disabled={disable} className='btn btn-primary' onClick={handleFormSubmit}> Submit </button>
        </section>
      </form>
      {
        errorMessage &&
        (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )
      }
    </div>
  );

}

export default Contact;
