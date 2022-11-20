import React from 'react';
import { Actions, ModalBody, OrderDetails, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { OrdersProps } from '../../Types/Orders';
import { formatCurrency } from '../../utils/formatCurrency';

interface ModalProps{
  visible: boolean;
  selectedOrder: OrdersProps | null;
  onClose: () => void;
}

export default function Modal({visible, selectedOrder, onClose} : ModalProps) {


  if(!visible || !selectedOrder){
    return null;
  }


  // CALCULANDO TOTAL
  const total = selectedOrder.products.reduce((total, {product, quantity}) => {
    return total += product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong> Mesa {selectedOrder.table} </strong>
          <button onClick={onClose}>
            <img src={closeIcon } alt="X" />
          </button>
        </header>
        <div className="status-container">
          <small> Status do pedido </small>
          <div>
            <span>
              {selectedOrder.status === 'WAITING' && '⏱️'}
              {selectedOrder.status === 'IN_PRODUCTION' && '🍹'}
              {selectedOrder.status === 'DONE' && '✅'}
            </span>
            <strong>
              {selectedOrder.status === 'WAITING' && 'Fila de Espera'}
              {selectedOrder.status === 'IN_PRODUCTION' && 'Em preparação'}
              {selectedOrder.status === 'DONE' && 'Pronto'}
            </strong>
          </div>

        </div>
        <OrderDetails>
          <strong> Itens </strong>
          <div className="orderItems">
            {selectedOrder.products.map(({_id, product,quantity}) => {
              return (
                <div className="item" key={_id}>
                  <img src={`http://localhost:3001/uploads/${product.imagePath}`} width='56px' height='28.5px' />
                  <span className="quantity">
                    {quantity}x
                  </span>
                  <div className="details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='total'>
            <span> Total </span>
            <strong>{formatCurrency(total)}</strong>
          </div>

        </OrderDetails>
        <Actions>
          <button className='primary'>
            <span>🍹</span>
            <span>Iniciar Produção</span>
          </button>
          <button className="secondary">
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
