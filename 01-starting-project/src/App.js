import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import React, {useState} from 'react';

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandle = (uName,uAge) =>{
    setUsersList((preveUsersList) => {
      return [...preveUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandle}/>
      <UserList users={usersList}/>
    </>
  );
}

export default App;
