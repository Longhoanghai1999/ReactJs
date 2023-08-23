import React from "react";
import { useContext } from "react";
import { UserContext } from "./Parent";

export default function Profile() {
  const { firstName, age } = useContext(UserContext);
  return (
    <div>
      <p>first name: {firstName}</p>
      <p>age: {age}</p>
    </div>
  );
}
