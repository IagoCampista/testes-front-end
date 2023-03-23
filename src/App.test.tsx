import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renderiza tudo sem crash', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Render Test', () => {
    it('renders name without crashing', ()=> {
        render(<App />)
        expect(screen.getByTestId('nome')).toBeInTheDocument()
    })
    it('renders email without crashing', ()=> {
        render(<App />)
        expect(screen.getByTestId('email')).toBeInTheDocument()
    })
    it('renders senha without crashing', ()=> {
        render(<App />)
        expect(screen.getByTestId('senha')).toBeInTheDocument()
    })
    it('renders confirmasenha without crashing', ()=> {
        render(<App />)
        expect(screen.getByTestId('confirmaSenha')).toBeInTheDocument()
    })
    it('renders botaoregistrar without crashing', ()=> {
        render(<App />)
        expect(screen.getByTestId('botaoRegistrar')).toBeInTheDocument()
    })
})
describe('RegisterTest', () => {
    it('testa se o os campos estão em branco', () => {
      render(<App />);
      const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
      const emailInput = screen.getByTestId('email') as HTMLInputElement;
      const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
      const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
      const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLInputElement;

      fireEvent.change(nomeInput, { target: { value: '' } })
      fireEvent.change(emailInput, { target: { value: '' } })
      fireEvent.change(senhaInput, { target: { value: '' } })
      fireEvent.change(confirmaSenhaInput, { target: { value: '' } })
      fireEvent.click(botaoRegistrar)

      // confere se o botao de registro ainda está na tela, confirmando que não houve sucesso no cadastro e o usuário ainda esta na tela de registro
      expect(botaoRegistrar).toBeInTheDocument();
    });
    it('testa se o nome é pequeno', () => {
      window.alert = jest.fn()
      render(<App />);
      const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
      const emailInput = screen.getByTestId('email') as HTMLInputElement;
      const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
      const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
      const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLButtonElement;

      fireEvent.change(nomeInput, { target: { value: 'alo' } })
      fireEvent.change(emailInput, { target: { value: 'alo123@gmail.com' } })
      fireEvent.change(senhaInput, { target: { value: 'senha' } })
      fireEvent.change(confirmaSenhaInput, { target: { value: 'senha' } })
      fireEvent.click(botaoRegistrar)

      expect(window.alert).toHaveBeenCalledWith('O nome inserido é muito pequeno!');
    });
    it('testa se o nome tem menos de 2 palavras', () => {
      window.alert = jest.fn()
      render(<App />);
      const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
      const emailInput = screen.getByTestId('email') as HTMLInputElement;
      const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
      const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
      const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLButtonElement;

      fireEvent.change(nomeInput, { target: { value: 'alooiss' } })
      fireEvent.change(emailInput, { target: { value: 'alo123@gmail.com' } })
      fireEvent.change(senhaInput, { target: { value: 'senha' } })
      fireEvent.change(confirmaSenhaInput, { target: { value: 'senha' } })
      fireEvent.click(botaoRegistrar)

      expect(window.alert).toHaveBeenCalledWith('O nome inserido é muito pequeno!');
    });
    it('testa se o nome esta ok', () => {
      window.alert = jest.fn()
      render(<App />);
      const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
      const emailInput = screen.getByTestId('email') as HTMLInputElement;
      const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
      const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
      const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLButtonElement;

      fireEvent.change(nomeInput, { target: { value: 'Jorge Cambalhota' } })
      fireEvent.change(emailInput, { target: { value: 'alo123@gmail.com' } })
      fireEvent.change(senhaInput, { target: { value: 'senha' } })
      fireEvent.change(confirmaSenhaInput, { target: { value: 'senha' } })
      fireEvent.click(botaoRegistrar)

      expect(window.alert).not.toHaveBeenCalledWith();
    });
    it('testa se as senhas sao diferentes, sendo diferentes', () => {
      window.alert = jest.fn()
      render(<App />);
      const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
      const emailInput = screen.getByTestId('email') as HTMLInputElement;
      const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
      const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
      const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLButtonElement;

      fireEvent.change(nomeInput, { target: { value: 'Jorge Cambalhota' } })
      fireEvent.change(emailInput, { target: { value: 'alo123@gmail.com' } })
      fireEvent.change(senhaInput, { target: { value: 'senha123' } })
      fireEvent.change(confirmaSenhaInput, { target: { value: 'senha' } })
      fireEvent.click(botaoRegistrar)

      expect(window.alert).toHaveBeenCalledWith('As senhas não coincidem!');
    });
    it('testa se as senhas sao diferentes, sendo iguais', () => {
      window.alert = jest.fn()
      render(<App />);
      const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
      const emailInput = screen.getByTestId('email') as HTMLInputElement;
      const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
      const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
      const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLButtonElement;

      fireEvent.change(nomeInput, { target: { value: 'Jorge Cambalhota' } })
      fireEvent.change(emailInput, { target: { value: 'alo123@gmail.com' } })
      fireEvent.change(senhaInput, { target: { value: 'senha123' } })
      fireEvent.change(confirmaSenhaInput, { target: { value: 'senha123' } })
      fireEvent.click(botaoRegistrar)

      expect(window.alert).not.toHaveBeenCalledWith();
    });

    it('testa se o email é valido', () => {
    render(<App />);
    const emailInput = screen.getByTestId('email') as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'emailinvalido' } });       
    expect(emailInput.validity.valid).toBeFalsy();

    fireEvent.change(emailInput, { target: { value: 'emailinvalido@' } });   
    expect(emailInput.validity.valid).toBeFalsy();

    fireEvent.change(emailInput, { target: { value: '@emailinvalido' } });   
    expect(emailInput.validity.valid).toBeFalsy();

    fireEvent.change(emailInput, { target: { value: 'emailinvaalido' } });   
    expect(emailInput.validity.valid).toBeFalsy();

    fireEvent.change(emailInput, { target: { value: 'emailvalido@email.com' } });   
    expect(emailInput.validity.valid).toBeTruthy();
    });

    it('testa se a senha é valida', () => {
    window.alert = jest.fn()
    render(<App />);
    const nomeInput = screen.getByTestId('nome') as HTMLInputElement;
    const emailInput = screen.getByTestId('email') as HTMLInputElement;
    const senhaInput = screen.getByTestId('senha') as HTMLInputElement;
    const confirmaSenhaInput = screen.getByTestId('confirmaSenha') as HTMLInputElement;
    const botaoRegistrar = screen.getByTestId('botaoRegistrar') as HTMLButtonElement;

    fireEvent.change(nomeInput, { target: { value: 'Jorge Cambalhota' } })
    fireEvent.change(emailInput, { target: { value: 'alo123@gmail.com' } })
    
    
    fireEvent.change(senhaInput, { target: { value: 'curta' } })
    fireEvent.change(confirmaSenhaInput, { target: { value: 'curta' } })
    fireEvent.click(botaoRegistrar)       
    expect(window.alert).toHaveBeenCalledWith('A senha não é válida!');

    fireEvent.change(senhaInput, { target: { value: 'senhasemletramaiuscula' } })
    fireEvent.change(confirmaSenhaInput, { target: { value: 'senhasemletramaiuscula' } })
    fireEvent.click(botaoRegistrar) 
    expect(window.alert).toHaveBeenCalledWith('A senha não é válida!');

    fireEvent.change(senhaInput, { target: { value: 'senhaSemNumero' } })
    fireEvent.change(confirmaSenhaInput, { target: { value: 'senhaSemNumero' } })
    fireEvent.click(botaoRegistrar) 
    expect(window.alert).toHaveBeenCalledWith('A senha não é válida!');

    fireEvent.change(senhaInput, { target: { value: 'SenhaCorreta123' } })
    fireEvent.change(confirmaSenhaInput, { target: { value: 'SenhaCorreta123' } })
    fireEvent.click(botaoRegistrar) 
    expect(window.alert).not.toHaveBeenCalledWith();
    });
    
})
