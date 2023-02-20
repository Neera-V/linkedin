import React from "react";

function JoinInput({
  email,
  setEmail,
  password,
  setPassword,
  agreedd,
  label1,
  label2,
  type,
  page1,
  register,
}) {
  return (
    <div>
      {" "}
      <form className="join_form">
        <div className="form_body">
          <div className="input_Containerr">
            <label className="inputt_label" style={{ marginTop: 0 }}>
              {label1}
            </label>
            <input
              className="inputt_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email-or-phone"
              // placeholder="Email or phone number"
            />
            <label className="inputt_label">{label2}</label>
            <div className="inputt_password">
              <input
                className="inputt_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={type}
                name="password"
              />
              {page1 && <button className="showw_button">Show</button>}
            </div>
          </div>
          {/* {page1 && (
            <span className="form_agreement">
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <a
                className="join_agree"
                href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
              >
                User Agreement
              </a>
              ,{" "}
              <a
                className="join_agree"
                href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
              >
                Privacy Policy
              </a>
              , and{" "}
              <a
                className="join_agree"
                href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy"
              >
                Cookie Policy
              </a>
              .
            </span>
          )} */}
          {/* <button
            className="join_submit"
            onClick={reg}
            type="submit"
            style={{ margin: styl }}
          >
            {btnText}
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default JoinInput;
