
// create a class based Component
// that will allow user to register
// 1. name
// 2. email
// 3. password
// 4. confirm password
// 5. Gender
// 6.Country
// 7.Terms and conditions
// on from submission,validate the input and display
// and enter with enterd information (Expected password filed)

import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      country: "",
      termsAccepted: false,
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTermsChange = (e) => {
    this.setState({ termsAccepted: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, gender, country, termsAccepted } = this.state;
    let errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (!gender) errors.gender = "Gender is required";
    if (!country) errors.country = "Country is required";
    if (!termsAccepted) errors.termsAccepted = "Accept terms & conditions";

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      alert(
        `Registration Successful!
Name: ${name}
Email: ${email}
Gender: ${gender}
Country: ${country}`
      );
    }
  };

  render() {
    const { name, email, password, confirmPassword, gender, country, termsAccepted, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={this.handleChange}
        />
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={this.handleChange}
            /> Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>
        </div>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}

        <select name="country" value={country} onChange={this.handleChange}>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}

        <div>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={this.handleTermsChange}
          />
          I agree to Terms & Conditions
        </div>
        {errors.termsAccepted && <p style={{ color: "red" }}>{errors.termsAccepted}</p>}

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
