import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuDropCadastro } from "../componentes/MenuDropCadastro";

export const Cadastro = () => {

    const url = 'https://6850666ee7c42cfd179891d7.mockapi.io/users'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, email, password, position}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar feedback');
                }
                return response.json();
            })
            .then((data) => {
                setMsg('Usuário cadastrado com sucesso!');
                setUsername('');
                setPassword('');
                console.log(username, email, password, position)
                navigate('/cliente')
            })
            .catch((error) => {
                console.error('Erro ao cadastrar:', error);
                setMsg('Erro ao criar o cadastro.');
            });
    }


    return(
        <form onSubmit={handleSubmit}>
            <div><h1>Cadastro</h1></div>
            <input type="text" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder="Senha"  onChange={(e) => setPassword(e.target.value)} value={password}/>
            <MenuDropCadastro position={position} setPosition={setPosition}/>
            <button>Cadastrar</button>
        </form>
    )
}