import {createContext, useState} from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children}) {
  const [usuario, setUsuario] = useState({})

  function login(email, senha) {
    if(email == "rafael" && senha == 123) {
      setUsuario({
        nome: 'Rafael',
        email: 'rafael@gmail.com',
        endereco: 'Av. Paulista',
        telefone: "(11) 9999-9999"
      })
      return "ok"
    }else {
      return "Email ou senha incorretos"
    }
  }

  return (
    <AutenticacaoContext.Provider value={{
      usuario,
      login,
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}