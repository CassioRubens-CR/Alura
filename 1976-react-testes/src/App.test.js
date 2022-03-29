import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('componente principal', () => {
  describe('Quando eu abro o app do Banco', () => {
    it('Mostrar o nome do banco', () => {
      render(<App />)
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });
  
    it('Mostrar saldo', () => {
      render(<App />)
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });
  
    it('Exibir botão realizar operação', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
    })
  })
})