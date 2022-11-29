import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as C from './style';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import doutor from '../images/doutor.jpg'

const Form = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function handleSubmit() {
    const email = 'dr.paiva@hotmail.com'
    const senha = 'Dinheiro2503'

    if(name === email && password === senha) {
      navigate('/main');
    }else{
      toast.error('Email ou senha incorreta !', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  }

  return (
    <C.Container>
      <C.Form>
        <C.Content>
          <C.Label>SISTEMA DE LOGIN</C.Label>
          <C.Image 
            src={doutor}
            alt="image do doutor"
          />
          <C.Input
            type="email"
            placeholder='Digite seu email'
            name='email'
            value={name}
            onChange={((e) => setName(e.target.value))}
          />
          <C.Input
            type="password"
            placeholder='Senha'
            name='senha'
            value={password}
            onChange={((e) => setPassword(e.target.value))}
          />
          <C.Button 
            type='submit'
            onClick={handleSubmit}
            >
            Entrar
          </C.Button>
          <ToastContainer />
          <C.Label>* Área Restrita</C.Label>
        </C.Content>
      </C.Form> 
    </C.Container>
   
  )
}

export default Form