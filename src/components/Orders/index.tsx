import React from 'react';
import Board from '../Board';
import './styles';
import { Container} from './styles';

export default function Orders() {
  return (
    <Container>
      <Board />
      <Board />
      <Board />
    </Container>
  );
}
