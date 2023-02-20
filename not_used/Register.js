import React from "react";
import Details from "./Details";
import { useSelector } from "react-redux";
import { selectAgree } from "../src/features/agreeSlice";
import JoinNow from "../src/JoinNow";

function Register() {
  const agreee = useSelector(selectAgree);

  return (
    <div>
      <div>
        {agreee ? (
          <Details />
        ) : (
          <div className="joinnn">
            <JoinNow />
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
