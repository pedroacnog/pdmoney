import { FormEvent, useState } from "react"
import { useTransactions } from "../../hooks/useTransactions"

import Modal from "react-modal"

import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransactions } = useTransactions()

  const [title, setTitle] = useState('')
  const [amout, setAmout] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransactions({
      title,
      amout,
      category,
      type
    })

    setTitle('')
    setAmout(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo"  value={title} onChange={event => setTitle(event.target.value)}/>

        <input placeholder="Valor" type="number" value={amout} onChange={event => setAmout(Number(event.target.value))} />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor = "green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor = "red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>


        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>

        </Container>
    </Modal>
  ) 
}

export default NewTransactionModal