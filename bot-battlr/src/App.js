import React,{useState,useEffect} from 'react';
import BotCollection from './components/BotCollection';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      setBots(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  },[]);

  return (
    <div className="App">
  Hello World
   
    </div>
  );
}

export default App;
