import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {ContextAdmin} from '../context/AdminContextRegister';

const AdminRegister = () => {

    const {name, changeName, apellidos, changeApellidos, email, changeEmail, password, changePassword, handleSubmit}=useContext(ContextAdmin);



    return (  
        <Registro onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={name} onChange={(e)=>changeName(e.target.value)}/>
            <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e)=>changeApellidos(e.target.value)}/>
            <input type="email" placeholder="E-mail" value={email} onChange={(e)=>changeEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>changePassword(e.target.value)}  />
            <Boton type="submit" >Registrar</Boton>
        </Registro>
    );
}

const Registro = styled.form`
    width: 80%;
    margin: 20px auto;
    height: 70vh;
    padding: 12px;
    background: rgba(0,128,128,.1);
    border: solid 1px rgb(0, 128, 128);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        width:200px;
        margin:-10px auto;
    }
    input{
        height: 40px;
        padding: 8px;
        margin-top: 12px;
        background: transparent;
        border: none;
        border-bottom: solid 1px teal;
        :focus{
            outline: none;
        }
    }
`;

const Boton = styled.button`
    width: 100%;
    background: teal;
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 12px;
    :hover{
        background: #ff7b00;
        cursor: pointer;
    }
`;

export default AdminRegister;