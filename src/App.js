import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [updatedUsers, updateUsers] = useState([]);
  const addUserHandler = (username, age, collegename) => {
    updateUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: Math.random().toString(),
          username: username,
          age: age,
          collegename: collegename,
        },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={updatedUsers} />
    </>
  );
}

export default App;
