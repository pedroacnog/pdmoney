import Modal from "react-modal"
import { Container } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean,
  RequestClose: () => void
}

function NewTransactionModal({isOpen, RequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={RequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container/>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      <Container/>
    </Modal>
  ) 
}

export default NewTransactionModal