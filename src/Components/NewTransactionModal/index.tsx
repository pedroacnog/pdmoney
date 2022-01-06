import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import {Container } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg}  alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  ) 
}

export default NewTransactionModal