import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {/* This div is for bg, ignore it */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* till here */}

      <div className="container">
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
          <input
            onChange={handleChange}
            name="fName"
            value={contact.fName}
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            name="lName"
            value={contact.lName}
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            name="email"
            value={contact.email}
            placeholder="Email"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
