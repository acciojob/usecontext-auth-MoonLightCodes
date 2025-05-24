
import React from 'react';
import './../styles/App.css';
import { useAuth } from "../AuthenticationContext";


const App = () => {
  const {isAuthed, setIsAuthed} =useAuth();
  return (
    <div>
        <h1>Click on the checkbox to get autenticated</h1>
        <p>{isAuthed?"you are now authenticated, you can proceed":"you are not authenticated"}</p>
        <input type="checkbox" id="check" onChange={()=>setIsAuthed(pr=>!pr)}/> <label htmlFor="check">I'm not robot</label>
    </div>
  )
}

export default App
