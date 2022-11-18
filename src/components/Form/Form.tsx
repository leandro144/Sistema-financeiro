import React from 'react'
import * as C from './style';

const Form = () => {
  return (
    <C.Container>
    <C.Content>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Input
        type="text"
        placeholder='Nome Completo'
      />
      <C.Input
        type="email"
        placeholder='Digite seu email'
      />
      <C.Input
        type="password"
        placeholder='Senha'
      />
      <C.Button>Entrar</C.Button>
      <C.Label>Sistema Restrito (Apenas Financeiro)</C.Label>
    </C.Content>
    </C.Container>
   
  )
}

export default Form