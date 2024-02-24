
import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const[userList, setUserList] = useState([])

  const addUserHandler =(uName,uAge,uCollege) =>{
    setUserList((prevUserList) =>{
      return [...prevUserList, {name:uName, age:uAge, college:uCollege, id:Math.random().toString(),}]
    });
    console.log(userList);
  }
  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
