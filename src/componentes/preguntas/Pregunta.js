import { useState } from "react";
import { Navigate } from 'react-router-dom';
import "../preguntas/Pregunta.css";
import { premios_data } from "../../data/data";

const Pregunta = ({ questions, index, setIndex, score, setScore, endGame, setEndGame }) => {

  const [contadorReloj, setContadorReloj] = useState(15);

  if (endGame) {
    return (<Navigate to="/endGame" />);
  }

  if (questions[index] !== undefined) {
    let allQuestions = [...questions[index].incorrect_answers, questions[index].correct_answer];
    //allQuestions = shuffleChoices(allQuestions);

    const handledValidarPregunta = (e) => {
      if (e.target.innerText == questions[index].correct_answer) {
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
      }, 1000);

    }

    return (
      <>
        <div className="container mt-4">
          <div className="col-md-12">
            <div id="circulo" className="mb-2 mt-2 p-3">
              <p>{contadorReloj}</p>
            </div>
          </div>
          <div className="card">
            <h1 className="card-header text-center">Pregunta: {questions[index].question}</h1>
            <div className="card-body">
              <div className="col-md-12">
                <div className="row">
                  {allQuestions.map((row) => {
                    return (
                      <div className="col-md-6">
                        <button type="button" className="btn btn-secondary btn-lg btn-block m-2" onClick={handledValidarPregunta}>{row}</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="text-center">{index + 1}/10</p>
          </div>
        </div>
      </>
    );
  } else {
    console.log(index);
    if (index == 10) {
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
                  <h1>No more questions...</h1>
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

function shuffleChoices(choices) {
  for (let index = choices.length - 1; index > 0; index--) {
    let index_2 = Math.floor(Math.random() * (index + 1))
    let temp = choices[index]
    choices[index] = choices[index_2]
    choices[index_2] = temp
  }
  return choices
}

