import { useEffect, useState , createContext, useContext} from 'react'
import React from 'react';
import Home from './Home';

//use effect and useContext


const Blogs = () => {

  //Hello

  const UserContext = createContext()
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);
  const [user, setUser] = useState("Amin Amgad");
  // useEffect(() => {
  //   setTimeout(() =>{
  //     setCount((count) => count + 1)
  //   },1000)
  // },[]);
  useEffect(() => {
    setCalc(() => count * 2);
  },[count])
  return (
   // <>
   <UserContext.Provider value={user}>
    <div>Blogs</div>
    <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calc}</p>
    <h1>I'm rendered {count} times and I'm {user}</h1>
    <Home user={user} />
    </UserContext.Provider>
  //</>
  )
}

export default Blogs