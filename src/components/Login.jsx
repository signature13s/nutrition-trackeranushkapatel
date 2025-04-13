import React from "react";

function Login() {
  return (
    <section className="form-parent">
      <form className="form">
        <h1>Login To Fitness</h1>

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

        <button className="btn">Login</button>

        <p>Not Registered ? Creat a Account</p>
      </form>
    </section>
  );
}

export default Login;
