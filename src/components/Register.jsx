import React from "react";

function Register() {
  return (
    <section className="form-parent">
      <form className="form">
        <h1>Start Your Fitness</h1>

        <input
          className="inp"
          type="text"
          placeholder="Enter Name"
          nmae="name"
        />

        <input
          className="inp"
          type="email"
          placeholder="Enter Email"
          nmae="email"
        />

        <input
          className="inp"
          type="password"
          placeholder="Enter Password"
          nmae="password"
        />

        <input
          className="inp"
          type="number"
          placeholder="Enter age"
          nmae="age"
        />

        <button className="btn">Join </button>

        <p>Already Registered ? login </p>
      </form>
    </section>
  );
}

export default Register;
