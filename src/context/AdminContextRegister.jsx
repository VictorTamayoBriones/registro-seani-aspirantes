import React,{useState} from 'react';
import registrarAdmin from '../utils/registrarAdmin';
import "firebase/auth";
import firebase from '../utils/firebase';

const ContextAdmin = React.createContext();

const ProviderAdmin = ({children})=>{

    const[registroAdmin, changeRegistroAdmin]=useState(false);
    const[name, changeName]=useState();
    const[apellidos, changeApellidos]=useState();
    const[email, changeEmail]=useState();
    const[password, changePassword]=useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name !== '' && apellidos !== '' && email !== ''){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                registrarAdmin({
                    nombre: name,
                    apellidos: apellidos,
                    correo: email
                }).then(()=>{
                    alert('Se agrego un admin');
                    changeName('');
                    changeApellidos('');
                    changeEmail('');
                    changePassword('');
                }).catch(()=>{
                    alert('existio un error');
                });    
            }).catch((error)=>{
                alert(error);
            })

        }
    }

    return(
        <>
            <ContextAdmin.Provider value={{registroAdmin, changeRegistroAdmin, name, changeName, apellidos, changeApellidos, email, changeEmail, password, changePassword, handleSubmit}}>
                {children}
            </ContextAdmin.Provider>
        </>
    );

}

export {ContextAdmin, ProviderAdmin}