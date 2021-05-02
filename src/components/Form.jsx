import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import "firebase/auth";
import firebase from '../utils/firebase';
import { addAlumn } from '../utils/DataBase';

const FromRegister = () => {

    const [test, setTest] = useState([]);
    const [logico, setlogico] = useState([]);
    const [matematico, setmatematico] = useState([]);
    const [lengua, setlengua] = useState([]);
    const [alumnos, setalumnos] = useState({});
    const [etapa, changeEtapa] = useState({
      isAgree : false,
      gender : ""
    });
    
    useEffect(() => {
      for (let i = 0; i <= 90; i++) {
        test.push({ pregunta: "", respuesta: "" });
        logico.push({ pregunta: "", respuesta: "" });
        matematico.push({ pregunta: "", respuesta: "" });
        lengua.push({ pregunta: "", respuesta: "" });
      }
    }, []);

    let etapaFinal = etapa.gender;

    const registrar = (e) => {
        e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(alumnos.email, alumnos.password)
        .then((res) => {
          var data = {
            user: res.user.uid,
            activeExam1: true,
            activeLogic: true,
            activeMat: true,
            activeLengua: true,
            time: 10800,
            timeLogic: 7300,
            timeMat: 7300,
            timeLeng: 7300,
            username: alumnos.username,
            alumnData: { carrera: alumnos.carrera },
            test: test,
            logico: logico,
            matematico: matematico,
            lengua: lengua,
          };
          addAlumn(res.user.uid, data, etapaFinal)
            .then((re) => console.log(re))
            .catch((err) => console.log(err));
            sendVerificationEmail();
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    };
  
    const sendVerificationEmail = () => {
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then((res) => {
          console.log(res);
          alert("Correo enviado");
        })
        .catch((err) => {
          console.log(err);
          alert("Error al enviar email" + err);
        });
    };
  
    const cambiar = (e) => {
      const { value, name } = e.target;
      setalumnos({
        ...alumnos,
        [name]: value,
      });
    };

    const handleRadio = (e)=>{
      const target = e.target;
      const name = target.name;
      const value = target.value;
      changeEtapa({
        ...etapa,
        [name] : value
      })
    }

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
                onChange={cambiar}
            />

            <input
                type="password" 
                placeholder="Contraseña"
                name="password"
                onChange={cambiar}
            />

            <input
                type="text" 
                placeholder="Nombre completo"
                name="username"
                onChange={cambiar}
            />

            <input 
                type="text" 
                placeholder="Carrera"
                name="carrera"
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