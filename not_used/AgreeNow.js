import React from "react";
import { useSelector } from "react-redux";
import { selectAgree } from "../src/features/agreeSlice";
import JoinNow from "../src/JoinNow";
import Details from "./Details";

function AgreeNow() {
  const agreee = useSelector(selectAgree);

  return <div>{!agreee ? <JoinNow /> : <Details />}</div>;
}

export default AgreeNow;
