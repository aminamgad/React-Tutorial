import { useState } from 'react'
import React from 'react'
//use state Hook
const Home = (user) => {
  const myStyle = {
    color:"white",
    backgroundColor:"DodgerBlue",
    padding:"10px"
  }
 const [color, setColor] = useState("")  ;
 const [car, setCar] = useState({
  brand: "Ford",
  model: "Mustang",
  year: "1964",
  color: "red"
});
const updateColor = () => {
  setCar(previousState => {
    return { ...previousState, color: "blue" }
  });
}
  return (
    <>
    <div style={myStyle}>Home {user.user}</div>
    <button className='btn' onClick={() => setColor("blue")}> Change color</button>
    <span style={{background:color , padding:"15px",borderRadius:"10px"}}>My fav color is {color} {car.brand} - {car.color}</span>
    </>
  )
}
export default Home