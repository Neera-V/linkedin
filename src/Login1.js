import React from "react";
import "./Login1.css";
import { useSelector } from "react-redux";
import { selectJoin } from "./features/joinSlice";
import Header1 from "./Header1";
import Loginbody from "./Loginbody";
import JoinNow from "./JoinNow";

function Login1() {
  const joinnn = useSelector(selectJoin);

  return (
    <div>
      {joinnn ? (
        <JoinNow />
      ) : (
        <div className="entire">
          <Header1 />
          <Loginbody />
        </div>
      )}
    </div>
  );
}

export default Login1;
