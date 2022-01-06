import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionsModal: () => void
}

function Header({onOpenNewTransactionsModal}:HeaderProps) {

  return (
    <Container>
      <Content> 
        <img src={logo} alt="pd money" />
        <button type='button' onClick={onOpenNewTransactionsModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}

export default Header
