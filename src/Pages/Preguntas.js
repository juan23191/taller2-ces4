import { useEffect, useState } from "react";
import Navbar from "../componentes/navbar/Navbar";
import Pregunta from "../componentes/preguntas/Pregunta";
import Premios from "../componentes/preguntas/Premios";

function Preguntas({user, category, difficulty, index, setIndex, score, setScore, endGame, setEndGame}) {

  const [data, setdata] = useState("");
  const [questions, setQuestions] = useState([]);
  var codigoRespuesta = "";

useEffect(() => {
    const searchQuestions = async () => {
      const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
      const res = await fetch(url);
      const data = await res.json();
      codigoRespuesta = data.response_code;
      setQuestions(data.results);
    };
    searchQuestions();
  }, [data]);

  return (
    <div className="App">
      <Navbar user={user} category={category} difficulty={difficulty} score={score} />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-10">
            {questions.length > 0 ? <Pregunta endGame={endGame} setEndGame={setEndGame} questions={questions} index={index} setIndex={setIndex} score={score} setScore={setScore} /> : codigoRespuesta !== "0" ? <p>Data not Found</p> : <p>Cargando...</p>  } 
          </div>
          <div className="col-md-2">
            <Premios/>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Preguntas;
