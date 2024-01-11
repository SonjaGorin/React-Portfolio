import { useState } from "react";
import { validateEmail } from "../../utils/validateEmail";
import "./Contact.css"

export default function Form() {
    // defining variables using useState
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // making sure that the right set function is called depending on the input field user is typing in
        if (name === "name") {
            return setName(value)
        }  else if (name === "email") {
            return setEmail(value)
        } else {
            return setMessage(value)
        }
    };

    // function that fires off the error message if the user moved cursor outside of the field
    // but didn't type enything
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

        // if user clicks the submit button, but any of the fields are left empty
        // the error message shows
        if (!form.name.value || !form.email.value || !form.message.value) {
            setErrorMessage("Please fill up all fields.");
            return;
        }
        
        // show error messaege if the input in the email fild is not a valid email
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        // after the form is submitted the input fields are cleared
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
            {/* if the submit button is clicked run handleFormSubmit function*/}
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="name-input">
                    <label>Name</label>
                    <input
                        value={fullName}
                        name="name"
                        // if user starts typing run handleInputChange function
                        onChange={handleInputChange}
                        // user moves cursor outside of the empty field run blurFunction
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