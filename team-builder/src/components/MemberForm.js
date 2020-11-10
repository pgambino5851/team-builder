import React, {useState} from 'react'

const MemberForm = props => {
    console.log(props)
    const [member, setMember] = useState(
        {name: "",
         role: "",
         email: ""
        });

    const handleChanges = event => {
        setMember({...member,
            [event.target.name]: event.target.value,

        })

    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
    }
    return (
        <form onSubmit ={submitForm}>
            <div>
                <label htmlFor="name">Team Member Name</label> <br />
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        onChange={handleChanges}
                        value={member.name}
                    />
            </div>
            <div>
                <label htmlFor="role">Role <br />
                    <input 
                        id="role"
                        name="role"
                        type="text"
                        placeholder="Enter Role"
                        onChange={handleChanges}
                        value= {member.role}
                    />
                </label>
            </div>
            <div>
            <label htmlFor="email">Email <br />
                <input 
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    onChange={handleChanges}
                    value= {member.email}
                />
            </label>
            </div>
            <button type="submit">Add Team Member</button>
        </form>
        
    )
}

export default MemberForm
