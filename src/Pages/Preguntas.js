import { useEffect, useState } from "react";
import { Container, Form} from "react-bootstrap";
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
    <Container className="containerQuestions">
      <Navbar user={user} category={category} difficulty={difficulty} score={score} />
        <div className="allContentQuestion">
          <div className="numero-question">
            <span>Pregunta {index + 1} de </span> {questions.length}
          </div>
          <div className="titulo-question">
          {questions.length > 0 ? <Pregunta endGame={endGame} setEndGame={setEndGame} questions={questions} index={index} setIndex={setIndex} score={score} setScore={setScore} /> : codigoRespuesta !== "0" ? <h5>Data not Found</h5>:<h5>Loading....</h5>}
          </div>
          <div className="premios">
            <span>Galeria de puntajes </span>
            <Premios/>
          </div>
        </div>
    </Container>
  );

}

export default Preguntas;