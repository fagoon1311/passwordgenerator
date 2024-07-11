import {useCallback, useEffect, useState} from 'react'
import './App.css';

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [special, setSpecial] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+='0123456789'
    if(special) str+='!@#$%^&*(){}[]'
    for(let i = 0; i < length; i++){
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, special])

  useEffect(()=>{
    passwordGenerator()
    console.log(password)
  },[length, numberAllowed, special])


  return (
    <div className="bg-black w-full h-full min-h-screen flex items-center justify-center">
      <div className='bg-gray-700 rounded-lg flex flex-col items-center justify-center w-[40rem] p-8'>
        <h1 className='text-blue-300 mb-6'>Password Generator</h1>
      <div className='flex flex-row w-full'>
        <input className='w-5/6 p-2 rounded-l-md' placeholder="Generated Password" readOnly value={password}></input>
        <button className='w-1/6 bg-blue-500 text-white p-2 rounded-r-md'>Copy</button>
      </div>
      <div className='flex flex-row w-full justify-between'>
        <input type="range" className='cursor-pointer' min={6} max={20} value={length} onChange={(e)=>setlength(e.target.value)}></input>
        <label className='text-blue-300'>Length:{length}</label>
        <input type='checkbox' onClick={()=>setSpecial(!special)}></input>
        <label className='text-blue-300'>Special Characters</label>
        <input type='checkbox' onClick={()=>setNumberAllowed(!numberAllowed)}></input>
        <label className='text-blue-300'>Numbers</label>
      </div>
  </div>
</div>

  );
}

export default App;
