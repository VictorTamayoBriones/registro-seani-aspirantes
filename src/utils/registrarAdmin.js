import {db} from './DataBase';

const registrarAdmin = ({nombre, apellidos, correo})=>{
    return db.collection('administradores').add({
        nombre: nombre,
        apellidos: apellidos,
        correo: correo
    });
}

export default registrarAdmin;