import { useEffect, useRef, useState } from 'react';
import './App.css';
import useCustomHook from './useCustomHook';

function App() {
  const firsnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const [firsname,setfirstname] = useState("");
  const [lastname,setlastname] = useState("");

  const s = useCustomHook(firsname,lastname);

  const handleClik = (e)=>{
    e.preventDefault();
    setfirstname(firsnameRef.current.value);
    setlastname(lastnameRef.current.value);
  };
return (
    <div className="App">
      <h1>Custom Hook Joke App</h1>
      <p>{s}</p>
      

        <form >
          <input type="text" ref={firsnameRef} /> <br />
          <input type="text" ref={lastnameRef} /><br />
          <button type='submit' onClick={handleClik}>Submit</button>
        </form>
    </div>
  );
}

export default App;
