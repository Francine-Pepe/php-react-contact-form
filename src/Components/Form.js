import React, { useState } from "react";
import $ from "jquery";
import styles from "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };

  return (
    <div className={styles.contact_form_container}>
      <form
        action="http://localhost:8000/server.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={(event) => handleChange(event)}
        />
        <label>Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <label>Subject:</label>
        <textarea
          type="text"
          id="subject"
          name="subject"
          placeholder="Write something..."
        ></textarea>
        <button type="submit">Submit</button>
        <h1>{result}</h1>
      </form>
    </div>
  );
}

export default Form;
