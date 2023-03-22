import React from 'react';
import { render, screen } from '@testing-library/react';
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
        expect(screen.getByTestId('confirmasenha')).toBeInTheDocument()
    })
    it('renders botaoregistrar without crashing', ()=> {
        render(<App />)
        expect(screen.getByTestId('botaoregistrar')).toBeInTheDocument()
    })
})
