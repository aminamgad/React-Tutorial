import React from 'react';
import { User } from './classes';
import  './style.css'
import ReactDOM  from 'react-dom/client';
import { userOne , userTwo , myPobject} from './classes';
import MyComponent from './MyComponenet';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';

const one  = userOne.userName;
const onide  = userOne.salary;
const user1ne  = userOne.msg();
const carInfo = {name:'Diwdar',age:20};

function App() {
    return (
        <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter></>
    );
  }

function MyForm() {
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"
    );
  
    const handleChange = (event) => {
      setTextarea(event.target.value);
      console.log(event.target.value);
    }
  
    return (
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    )
  }
const mySecond = 
<>
  <p>I'm Amin Amfgad work at programming</p>
</>

 const myFirst = <div>
    <App />
     <h2>   Hussein & </h2>
 <MyForm />
 <MyComponent brand="Mama" krl="Gamel" carInfo={carInfo}/>
 {mySecond}
 {one} + {onide} + {user1ne} + {User.countMembers()} <br/>
 </div>;

console.log(userOne);
console.log(userTwo.getSalary() * 0.3);
myPobject.c = 100;
console.log(myPobject);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirst)

// const container = document.getElementById('root');
// const root2 = ReactDOM.createRoot(container)
// root2.render(<p>Ahmed</p>)