import React from 'react';
import { OrdersProps } from '../../Types/Orders';
import Board from '../Board';
import './styles';
import { Container} from './styles';

const orders: OrdersProps[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668619538145-frango-catupiry.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668632709057-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

export default function Orders() {
  return (
    <Container>
      <Board icon='⏱️' titulo='Fila de Espera' orders={orders}/>
      <Board icon='🍹' titulo='Em preparação' orders={[]}/>
      <Board icon='✅' titulo='Pronto' orders={[]} />
    </Container>
  );
}
