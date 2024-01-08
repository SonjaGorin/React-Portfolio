import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleInputChange = (e) => {

      const { name, value } = e.target;

      if (name === "name") {
        return setName(value)
      } else if (name === "email") {
        return setEmail(value)
      } else {
        return setMessage(value)
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setName('');
      setEmail('');
      setMessage("");
    };

        return (
        <div className="container text-center">
            <h1>
                Contact
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="First and Last Name"
                />
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="email"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                />
                <button type="submit">
                Submit
                </button>
            </form>
        </div>
        );
}

export default Form;