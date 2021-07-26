import React, {useContext} from 'react';
import Header from './components/Header';
import FormRegister from './components/Form';
import {ContextAdmin} from './context/AdminContextRegister';
import RegistroAdmin from './components/AdminRegister';

function App() {
  
  const {registroAdmin} = useContext(ContextAdmin);

  return (
    <>
      <Header/>
      {
        registroAdmin === true?
          <RegistroAdmin/>
        :
          <FormRegister/>
      }
    </>
  );
}

export default App;
