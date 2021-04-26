import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { key: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  let content = (
    <p style={{textAlign: 'center', color:'white'}}>No user, add one</p>
  )

  if(usersList.length > 0){
    content = (
      <UserList users={usersList} />
    )
  }

    return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
