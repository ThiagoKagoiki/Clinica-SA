import React, { useState } from "react";

export const MenuDropCadastro = ({position, setPosition}) => {


    const handleOption = (e) => {
        const value = e.target.value
        setPosition(value)
        console.log('Valor selecionado:', value);
    }

    return(
        <div>
            <label htmlFor="" className="title-option">Escolha uma opção</label>
            <select name="" id="select-position" value={position} onChange={handleOption}>
                <option value="">Selecione</option>
                <option value="paciente">Paciente</option>
            </select>
        </div>
    )
}