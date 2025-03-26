import React, { useState } from 'react'

const Login = () => {

    const [name,setName] = useState()

    const submit = async(e)=>{
        e.preventDefault()
        console.log("submit")
        console.log(name)
        const response = await fetch("/api/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name
            }),
        })

        const json = await response.json()
        console.log(json)
    }
  return (
    <div>
      <form action="">
        <input 
        type="text" 
        placeholder='enter your name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
