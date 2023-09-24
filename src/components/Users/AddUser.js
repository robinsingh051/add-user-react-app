import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandle = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        msg: "Please enter a valid name, age and college name (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        msg: "Please enter a age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredCollegeName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
    // props.onAddUser(enteredUsername, enteredAge);
    // setEnteredAge("");
    // setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          msg={error.msg}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandle}
            ref={ageInputRef}
          />
          <label htmlFor="collegename">College Name</label>
          <input
            id="collegename"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={collegeInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
