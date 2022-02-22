import { premios_data } from "../../data/data";

const Login = () => {
    const arrayData = [...premios_data].reverse();

    return (
        <div className="">
            <div className="list-group col-md-12">
                {arrayData.map(({index,valor}) =>{
                    return (
                        <a href="#" className="list-group-item list-group-item-action text-center" 
                        id={"premio-"+index} >{valor}</a>
                    );
                })}
            </div>
        </div>

    );
};

export default Login;
