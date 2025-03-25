import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text,setText] = useState("")
  async function fetchData(){
    const data = await fetch("/api",
      {
        method:"GET"
      }
    )

    const json = await data.json()
    console.log(json)
    setText(json.message)
  }
  useEffect( ()=>{
    fetchData()
  },[])

  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

export default App
