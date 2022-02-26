import React from "react";
import { Link } from "react-router-dom";

const EndGame = () => {
    return (
        <>
        <h1>JUEGO FINALIZADO</h1>
        <Link to={"/"} ><h1>SALIR</h1></Link>
        </>
  );
};

export default EndGame;