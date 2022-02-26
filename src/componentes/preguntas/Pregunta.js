import { useEffect, useState } from "react";
import { FormControl, Card, InputGroup } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import "../preguntas/Pregunta.css";
import { premios_data } from "../../data/data";

function Pregunta ({ questions, index, setIndex, score, setScore, endGame, setEndGame }){

  const [contadorReloj, setContadorReloj] = useState(30);
  const [cuentaRegresiva, setCuentaRegresiva] = useState(false);

  useEffect(()=>{
    const intervalo = setInterval(()=>{
      if(contadorReloj > 0) setContadorReloj((contadorReloj) =>contadorReloj - 1);
      if(contadorReloj === 0) setCuentaRegresiva(true);
    },1000);
    return () => clearInterval(intervalo);
  },[contadorReloj]);

  if (endGame) {
    console.log("Entro")
    return (<Navigate to="/endGame" />);
  }

  if (questions[index] !== undefined) {
    let allQuestions = [...questions[index].incorrect_answers, questions[index].correct_answer];

    const handledValidarPregunta = (e) => {
      if (e.target.innerText === questions[index].correct_answer) {
        e.target.className = "btn btn-success btn-lg btn-block m-2";
        setScore(premios_data[index].valor);
        const selectorPremio = 'a[id="premio-' + index + '"]';
        if (document.querySelector(selectorPremio)) {
          document.querySelector(selectorPremio).className = "list-group-item list-group-item-action active text-center";
        }
        const selectorPremioDeactivate = 'a[id="premio-' + (index - 1) + '"]';
        if (document.querySelector(selectorPremioDeactivate)) {
          document.querySelector(selectorPremioDeactivate).className = "list-group-item list-group-item-action text-center";
        }
        alert('Pregunta correcta');
      } else {
        e.target.className = "btn btn-danger btn-lg btn-block m-2";
        setEndGame(true);
        alert('Pregunta incorrecta');
      }
      setTimeout(() => {
        setIndex(index + 1);
        e.target.className = "btn btn-secondary btn-lg btn-block m-2";
      }, 1500);

    }

    return (
      <>
        <InputGroup className="contadorReloj">
              <span>Tiempo restante para contestar</span>
              <h5 className="numeroContador">{contadorReloj}</h5>
        </InputGroup>
        <Card className="CardQuestion">
          <div className="card">
            <h1>{questions[index].question}</h1>
                <div>{!cuentaRegresiva?(
                  <div className="row">
                    {allQuestions.map((row) => {
                      return (
                        <div className="apartadoQuestions">
                          <button type="button" className="bottonQuestion" disabled={cuentaRegresiva} onClick={handledValidarPregunta}>{row}</button>
                        </div>
                      );
                    })}
                  </div>
                  ):(<button className="botonContinuar" onClick={()=>{setContadorReloj(30);setCuentaRegresiva(false); setIndex(index + 1)}}>Continuar</button>)}
                </div>
              </div>
        </Card>
      </>
    );
  } else {
    console.log(index);
    if (index === 10) {
      return (
        <>
          return (<Navigate to="/win" />);
        </>
      );
    } else {
      return (
        <>
          <div className="container mt-4">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12">
                  <h1>No se pueden recuperar preguntas...</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }


  }


};

export default Pregunta;


