import { useEffect, useState } from "react";

import "../section/section.css";
import { trivia_categories, trivia_difficulty } from "../../data/data";
import Options from '../select/options';
import Preguntas from '../../Pages/Preguntas';
import { Link } from "react-router-dom";

const Login = ({setUser, setCategory, setDifficulty}) => {

    const handleNombre = ({target}) => {
        setUser(target.value);
    };
    const handleCategoria = ({target}) => {
        setCategory(target.value);
    };
    const handleDificultad = ({target}) => {
        setDifficulty(target.value);
    };

    return (
        <div className="container">
            <div className="form-group">
                <label>Usuario</label>
                <input type="text" className="form-control" id="user" placeholder="Ingrese su usuario" onChange={handleNombre}/>
            </div>
            <div className="form-group">
                <label>Categoria</label>
                <select key="option1" className="form-control" id="categoria" onChange={handleCategoria}>
                    <option value=""  defaultValue>Selecciona una opcion</option>
                    {trivia_categories.map((data) => { return <Options {...data} /> })}
                </select>
            </div>
            <div className="form-group">
                <label>Dificultad</label>
                <select key="option2" className="form-control" id="dificultad" onChange={handleDificultad}>
                    <option value=""  defaultValue>Selecciona una opcion</option>
                    {trivia_difficulty.map((data) => { return <Options {...data} /> })}
                </select>
            </div>
            <Link to={"/preguntas"}>Ingresar</Link>
        </div>

    );
};

export default Login;
