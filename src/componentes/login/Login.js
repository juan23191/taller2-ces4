import { Container, Form, Navbar } from "react-bootstrap";
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
        <Container className="containerLog">
            <Form className="formLog">
                <Form.Label>Usuario</Form.Label>
                <Form.Group className="groupLog"> 
                    <input type="text" id="user" placeholder="Ingrese su usuario" required onChange={handleNombre}/>
                </Form.Group>
                <Form.Label>Categoria</Form.Label>
                <Form.Group className="groupLog">
                    <select key="option1" className="form-control" id="categoria" onChange={handleCategoria}>
                        <option value=""  defaultValue>Selecciona la categoria </option>
                        {trivia_categories.map((data) => { return <Options {...data} /> })}
                    </select>
                </Form.Group>
                <Form.Group className="groupLog">
                    <label>Dificultad</label>
                    <select key="option2" className="form-control" id="dificultad" onChange={handleDificultad}>
                        <option value=""  defaultValue>Selecciona la dificultad del juego</option>
                        {trivia_difficulty.map((data) => { return <Options {...data} /> })}
                    </select>
                </Form.Group>
                <Link to={"/preguntas"} className="Button">Ingresar</Link>
            </Form>
        </Container>

    );
};
export default Login;
