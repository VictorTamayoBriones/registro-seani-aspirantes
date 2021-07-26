import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import {ContextRegistro} from './../context/registroContext';

const FromRegister = () => {

    const { test, logico, matematico, lengua, cambiar, handleRadio, registrar, alumnos } = useContext(ContextRegistro);
   
    useEffect(() => {
      for (let i = 0; i <= 90; i++) {
        test.push({ pregunta: "", respuesta: "" });
        logico.push({ pregunta: "", respuesta: "" });
        matematico.push({ pregunta: "", respuesta: "" });
        lengua.push({ pregunta: "", respuesta: "" });
      }
    }, []);

    

    return (
        <>
        <Registro onSubmit={registrar}>
          <Etapas>
            <div>
              <input
                type="radio" 
                id="e1" 
                name="gender" 
                value="e1-2021"
                onChange={handleRadio}
              />
              <label for="e1">e1-2021</label>
            </div>
            
            <div>
              <input 
                type="radio" 
                id="e2" 
                name="gender" 
                value="e2-2021"
                onChange={handleRadio}
              />
              <label for="e2">e2-2021</label>
            </div>

            <div>
              <input 
                type="radio" 
                id="e3" 
                name="gender" 
                value="e3-2021"
                onChange={handleRadio}
              />
              <label for="e3">e3-2021</label>  
            </div>
          </Etapas>

            <input 
                type="email" 
                placeholder="Email"
                name="email"
                value={alumnos.email}
                onChange={cambiar}
            />

            <input
                type="password" 
                placeholder="Contraseña"
                name="password"
                value={alumnos.password}
                onChange={cambiar}
            />

            <input
                type="text" 
                placeholder="Nombre completo"
                name="username"
                value={alumnos.username}
                onChange={cambiar}
            />

            <input 
                type="text" 
                placeholder="Carrera"
                name="carrera"
                value={alumnos.carrera}
                onChange={cambiar}
            />
            <Boton>Registrar</Boton>
        </Registro>
        </>
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
        background: transparent;
        border: none;
        border-bottom: solid 1px teal;
        :focus{
            outline: none;
        }
    }
`;

const Etapas = styled.div`
  width:90%;
  margin: 0px auto;
  display:flex;
  justify-content: center;
  div{
    display: flex;
    align-items: center;
    width: 100px;
    input{
      margin: 0px 5px;
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

export default FromRegister;