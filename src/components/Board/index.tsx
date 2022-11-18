import React from 'react';
import { OrdersProps } from '../../Types/Orders';
import {BoardContainer, OrdersContainer} from './styles';

export interface BoardProps{
  icon: string;
  titulo: string;
  orders: OrdersProps[];
}

export default function Board(props : BoardProps) {
  return (
    <BoardContainer>
      <header>
        <span>{props.icon}</span>
        <strong>{props.titulo} </strong>
        <span>{1}</span>
      </header>
      <OrdersContainer>
        {props.orders.map((order) => {
          return(
            <button type='button' key={order._id}>
              <strong> Mesa {order.table} </strong>
              <span> {order.products.length} itens </span>
            </button>
          );
        })}
      </OrdersContainer>
    </BoardContainer>
  );
}
