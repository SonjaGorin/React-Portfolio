import { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";
import "./Contact.css"

function Form() {
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === "name") {
            return setName(value)
        }  else if (name === "email") {
            return setEmail(value)
        } else {
            return setMessage(value)
        }
    };

    const blurFunction = (e) => {
        const { name, value } = e.target;
        if (value === "") {
            setErrorMessage(`The ${name} field is required.`);
            return;
        }
        setErrorMessage("");
    }
  
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = e.target

        if (!form.name.value || !form.email.value || !form.message.value) {
            setErrorMessage("Please fill up all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("Form successfully submitted!");
    };

    return (
        <div className="contact-page">
            <h1>
                Contact
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="name-input">
                    <label>Name</label>
                    <input
                        value={fullName}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                    />
                </div>
                <div className="email-input">
                    <label>Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                    />
                </div>
                <div className="message-input">
                    <label >Message</label>
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={blurFunction}
                        type="text"
                        className="message-field"
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button type="submit" className="submit-bttn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;