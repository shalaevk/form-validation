import { useState, useRef, useEffect } from "react";
import { checkEmail, checkPass } from "./formValidation";

export function RefForm() {
  const email = useRef();
  const pass = useRef();

  const [emailErrors, setIsEmailErrors] = useState([]);
  const [passErrors, setIsPassErrors] = useState([]);
  const [isAfterFirstSubmit, setAfterFirstSubmit] = useState(false);

  function submitHendler(e) {
    e.preventDefault();
    setAfterFirstSubmit(true);

    const EmailResult = checkEmail(email.current.value);
    const PassResult = checkPass(pass.current.value);

    setIsEmailErrors(EmailResult);
    setIsPassErrors(PassResult);

    if (EmailResult.length === 0 && PassResult.length === 0) {
      alert("Success");
    }
  }

  return (
    <>
      <form onSubmit={submitHendler} className="form">
        <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            onChange={
              isAfterFirstSubmit
                ? (e) => setIsEmailErrors(checkEmail(e.target.value))
                : undefined
            }
            className="input"
            type="email"
            id="email"
            ref={email}
          />
          {emailErrors.length > 0 && <div className="msg">{emailErrors}</div>}
        </div>
        <div className={`form-group ${passErrors.length > 0 ? "error" : ""}`}>
          <label className="label" htmlFor="pass">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            id="pass"
            ref={pass}
            onChange={
              isAfterFirstSubmit
                ? (e) => setIsPassErrors(checkPass(e.target.value))
                : undefined
            }
          />
          {passErrors.length > 0 ? <div className="msg">{passErrors}</div> : ""}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
