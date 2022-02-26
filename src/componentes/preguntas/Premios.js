import { premios_data } from "../../data/data";
import "../preguntas/Pregunta.css";
const Login = () => {
    const arrayData = [...premios_data].reverse();

    return (
            <div className="premiosIteratico">
                {arrayData.map(({index,valor}) =>{
                    return (
                        <a className="items" 
                        id={"premio-"+index} >{valor}</a>
                    );
                })}
            </div>
    );
};

export default Login;
