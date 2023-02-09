import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [gradYear, setGradYear] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        first_name: firstName,
        last_name: lastName,
        photo: photo,
        grad_year: gradYear,
        phone_number: phoneNumber,
        admin: false,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSignUp}>
      <p>First Name</p>
      <input
        type="text"
        id="first-name"
        autoComplete="off"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Last Name</p>
      <input
        type="text"
        id="last-name"
        autoComplete="off"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Email</p>
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Password</p>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <p>Password Confirmation</p>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
      <p>Profile Photo Link</p>
      <input
        type="text"
        id="photo-url"
        autoComplete="off"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <p>Graduating Year</p>
      <input
        type="text"
        id="grad-year"
        autoComplete="off"
        value={gradYear}
        onChange={(e) => setGradYear(e.target.value)}
      />
      <p>Phone Number</p>
      <input
        type="text"
        id="phone-number"
        autoComplete="off"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </form>
  );
}

export default SignUpForm;
