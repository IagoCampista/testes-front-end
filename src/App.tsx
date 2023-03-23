import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  const [dadosUsuario, setDadosUsuario] = useState({ 
      nome: '', 
      email: '', 
      senha: '', 
      confirmaSenha: '' 
    });

    function handleSubmit(event: any){
      event.preventDefault()

      if (!checarNome(dadosUsuario.nome)){
        alert("O nome inserido é muito pequeno!")
        return
      }

      if (isSenhasDiferentes(dadosUsuario.senha, dadosUsuario.confirmaSenha)){
        alert("As senhas não coincidem!")
        return
      }

      if (checarSenhaValida(dadosUsuario.senha)){
        alert("A senha não é válida!")
        return
      }

      console.log(dadosUsuario)

    }

    function checarNome(nome: string){
      const NomeSeparado = nome.trim().split(/\s+/);
      return ((nome.length >3 ) && (NomeSeparado.length > 1))
    }

    function isSenhasDiferentes(senha: string, confirmaSenha: string){
      return (senha != confirmaSenha)
    }

    function checarSenhaValida(senha: string): boolean {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      console.log(regex.test(senha));
      return !regex.test(senha);
      
    }

  return (
    <div className="App">
      <form>
        <label htmlFor="nome">Nome:
        <input type="text" id="nome" name="nome" data-testid="nome"
          value={dadosUsuario.nome}
          onChange={e => setDadosUsuario({ ...dadosUsuario, nome: e.target.value })}/>
        </label>
        {dadosUsuario.nome}
        <br />

        

        <label htmlFor="email">E-mail:
        <input type="email" id="email" name="email" data-testid="email"
           value={dadosUsuario.email}
           onChange={e => setDadosUsuario({ ...dadosUsuario, email: e.target.value })}/>
        </label>
        {dadosUsuario.email}
        <br />

        <label htmlFor="senha">Senha:
        <input type="password" id="senha" name="senha" data-testid="senha"
           value={dadosUsuario.senha}
           onChange={e => setDadosUsuario({ ...dadosUsuario, senha: e.target.value })}/>
        </label>
        {dadosUsuario.senha}
        <br />

        <label htmlFor="confirmasenha">Confirme a senha:
        <input type="password" id="confirmasenha" name="confirmaSenha" data-testid="confirmaSenha"
           value={dadosUsuario.confirmaSenha}
           onChange={e => setDadosUsuario({ ...dadosUsuario, confirmaSenha: e.target.value })}/>
        </label>
        {dadosUsuario.confirmaSenha}
        <br />

        <button type="submit" data-testid="botaoRegistrar" onClick={handleSubmit}>Registrar</button>
      </form>
    </div>
  )
}

export default App