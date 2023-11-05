import React, { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Color = () => {
  const [input, setInput] = useState("");
  console.log(input);

  const [color, setColor] = useState([]);
  // console.log(color);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const singleColor = new Values(input);
    setColor(singleColor.all(10));
  };

  const handleClick = (itm) => {
    navigator.clipboard.writeText(itm);

    toast("Copied to clipboard!", { theme: "dark" });
  };

  return (
    <main>
      {/* //Top Section */}

      <section className="container">
        <h4>color generator</h4>
        <form onSubmit={handleSubmit} className="color-form">
          <input
            type="color"
            value={color.hex}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="#f15025"
            value={input}
          />
          <button
            className="btn"
            type="submit"
            style={{ background: input }}
          
          >
            submit
          </button>
        </form>
      </section>

      {/* // Bottom Section */}

      <section className="colors">
        {color.map((ele) => {
          return (
            <article
              onClick={() => handleClick(ele.hex)}
              className="color false"
              style={{ backgroundColor: `rgb(${ele.rgb})` }}
            >
              <p className="percent-value">{ele.weight}%</p>
              <p className="color-value">#{ele.hex}</p>
            </article>
          );
        })}
      </section>
      <div className="Toastify">
        <ToastContainer />
      </div>
    </main>
  );
};

export default Color;
