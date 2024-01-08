import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
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

        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        } else {
            setErrorMessage("");
        };

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="">
            <h1>
                Contact
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="first and last name"
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
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;