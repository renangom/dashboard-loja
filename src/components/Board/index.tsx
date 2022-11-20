import React, { useState } from 'react';
import { OrdersProps } from '../../Types/Orders';
import Modal from '../Modal';
import {BoardContainer, OrdersContainer} from './styles';

export interface BoardProps{
  icon: string;
  titulo: string;
  orders: OrdersProps[];
}

export default function Board(props : BoardProps) {
  const [active, setActive] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | OrdersProps>(null);

  function handleOpenModal(order: OrdersProps) {
    setActive(true);
    setSelectedOrder(order);
  }

  function handleCloseModal(){
    setActive(false);
    setSelectedOrder(null);
  }

  return (
    <BoardContainer>
      <Modal visible={active} selectedOrder={selectedOrder} onClose={handleCloseModal}  />
      <header>
        <span>{props.icon}</span>
        <strong>{props.titulo} </strong>
        <span>{props.orders.length}</span>
      </header>
      {props.orders.length > 0 && (
        <OrdersContainer>
          {props.orders.map((order) => {
            return(
              <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                <strong> Mesa {order.table} </strong>
                <span> {order.products.length} itens </span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </BoardContainer>
  );
}
