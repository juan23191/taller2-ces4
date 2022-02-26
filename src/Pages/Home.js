import { useEffect, useState } from "react";
import React from "react";
import Login from "../componentes/login/Login";

const Home = ({setUser, setCategory, setDifficulty}) => {


  return (
    <>
      <Login setUser={setUser} setCategory={setCategory} setDifficulty={setDifficulty}/>
    </>
  );
};

export default Home;
