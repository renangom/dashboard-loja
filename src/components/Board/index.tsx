import React from 'react';
import {BoardContainer, OrdersContainer} from './styles';

export default function Board() {
  return (
    <BoardContainer>
        <header>
          <span>⏱️</span>
          <strong>Fila de Espera </strong>
          <span>{1}</span>
        </header>
        <OrdersContainer>
          <button type='button'>
            <strong> Mesa 2 </strong>
            <span> 2 itens </span>
          </button>
        </OrdersContainer>
      </BoardContainer>
  )
}
