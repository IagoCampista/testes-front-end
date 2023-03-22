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
    
})
