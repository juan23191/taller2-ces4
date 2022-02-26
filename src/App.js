import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../src/Pages/Home";
import Preguntas from "./Pages/Preguntas";
import EndGame from "./Pages/EndGame";
import Win from "./Pages/Win";

import "./App.css";

function App() {

  const [user, setUser] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} setCategory={setCategory} setDifficulty={setDifficulty} />} />
          <Route path="/preguntas" element={<Preguntas  endGame={endGame} setEndGame={setEndGame} index={index} setIndex={setIndex} score={score} setScore={setScore} user={user} category={category} difficulty={difficulty}/>} />
          <Route path="/endGame" element={<EndGame/>}></Route>
          <Route path="/win" element={<Win/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
