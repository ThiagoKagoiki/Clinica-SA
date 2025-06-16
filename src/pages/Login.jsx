import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {MenuDropLogin} from "../componentes/MenuDropLogin"

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleCadastro = () => {
        navigate('/cadastro')
    }


    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        
        const success = await login(username, password, position);
        
        if(success && position === 'paciente'){
            navigate('/cliente')
        }else if(success && position === 'admin'){
            navigate('/admin')
        }else{
            alert("Usuário ou senha inválidos")
        }

        console.log('position: ', position)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div><h1>Login</h1></div>
                <input type="text" placeholder="Usuário"/>
                <input type="text" placeholder="Senha"/>
                <MenuDropLogin position={position} setPosition={setPosition}/>
                <button>Acessar</button>
            </form>
            <button onClick={handleCadastro}>Cadastrar</button>
        </div>
    )
}