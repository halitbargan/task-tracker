import './App.css';
import Gorevekle from './components/Gorevekle';
import Header from "./components/Header";
import {useState} from "react"
import Gorevler from './components/Gorevler';

function App() {
  const [emirler, setemirler] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    }
  ])
  // console.log(emirler);
  return (
    <div className="App">
      <Header />
      <Gorevekle />
      <Gorevler halitler={emirler} />

    </div>
  );
}

export default App;
