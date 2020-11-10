import React from 'react'

const Members = props => {
   return (
       <div>
           {props.members.map((member) => (
               <div key={member.id}>
                <h2 >Name: {member.name}</h2>
                <h3> Role: {member.role}</h3>
                <h3> Email: {member.email}</h3>
               </div>
           ))}
       </div>
   )
}

export default Members