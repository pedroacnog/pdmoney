import { useContext } from 'react'

import { TransactionsContext } from '../../TransactionsContext'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles"

function Summary() {
  const {transactions} = useContext(TransactionsContext)

  console.log(transactions)

  return (
   <Container>
     <div>
       <header>
         <p>Entradas</p>
         <img src={incomeImg} alt="income" />
       </header>
       <strong>R$ 4000</strong>
     </div>
     <div>
       <header>
         <p>Saidas</p>
         <img src={outcomeImg} alt="outcome" />
       </header>
       <strong>- R$ 2000</strong>
     </div>
     <div className='highlight-background'>
       <header>
         <p>Total</p>
         <img src={totalImg} alt="total" />
       </header>
       <strong>R$ 2000</strong>
     </div>
   </Container>
  )
}

export default Summary
