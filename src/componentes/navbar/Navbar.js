import { Link } from "react-router-dom";

import "../navbar/Navbar";

const Navbar = ({user, category, difficulty, score}) => {

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 text-white text-center"><h1>User: {user.toUpperCase()}</h1></div>
              <div className="col-md-3 text-white text-center"><h1>Level: {difficulty.toUpperCase()}</h1></div>
              <div className="col-md-3 text-white text-center"><h1>Money: ${score}</h1></div>
              <div className="col-md-3 text-white text-center"><Link to={"/"}><h1>SALIR</h1></Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
