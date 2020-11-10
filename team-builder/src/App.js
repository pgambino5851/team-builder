import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import MemberForm from './components/MemberForm'
import Members from './components/Members'
function App() {

  const [members, setMembers] = useState([])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email,
      
    };
    setMembers([...members, newMember])
    console.log(members)
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember}/>
      <Members members={members} />
    </div>
  );
}

export default App;
