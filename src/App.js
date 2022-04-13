import React, { useState } from "react";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // input field value is of type String, convert to number
    let number = parseInt(value, 10) || 1;

    if (number <= 0) {
      number = 1;
    }
    if (number > 8) {
      number = 8;
    }
    setText(data.slice(0, number));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="label">
          paragraphs:
        </label>
        <input
          name="amount"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
