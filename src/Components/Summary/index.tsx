import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles"

function Summary() {
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
         <img src={outcomeImg} alt="income" />
       </header>
       <strong>- R$ 2000</strong>
     </div>
     <div>
       <header>
         <p>Total</p>
         <img src={totalImg} alt="income" />
       </header>
       <strong>R$ 2000</strong>
     </div>
   </Container>
  )
}

export default Summary
