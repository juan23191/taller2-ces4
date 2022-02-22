import React from "react";
import { Link } from "react-router-dom";

const Win = () => {
    return (
        <>
        <h1>JUEGO FINALIZADO GANASTE</h1>
        <Link to={"/"}><h1>SALIR</h1></Link>
        </>
  );
};

export default Win;