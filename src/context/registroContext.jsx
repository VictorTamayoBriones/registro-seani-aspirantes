import React,{useState} from 'react';

import "firebase/auth";
import firebase from '../utils/firebase';
import { addAlumn } from '../utils/DataBase';

const ContextRegistro = React.createContext();


const ProviderRegistro = ({children}) => {

    const [alumnos, setalumnos] = useState({});
    const [test, setTest] = useState([]);
    const [logico, setlogico] = useState([]);
    const [matematico, setmatematico] = useState([]);
    const [lengua, setlengua] = useState([]);
    const [etapa, changeEtapa] = useState({
        isAgree : false,
        gender : ""
    });

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
            setalumnos(
              {
                email: '',
                password: '',
                username: '',
                carrera: ''
              }
            );
          })
          .catch((err) => {
            console.log(err);
            alert("Error al enviar email" + err);
          });
    };

    return (  
        <>
            <ContextRegistro.Provider value={{alumnos, test, logico, matematico, lengua, cambiar, handleRadio, etapaFinal, registrar}}>
                {children}
            </ContextRegistro.Provider>
        </>
    );
}
 
export {ProviderRegistro, ContextRegistro};