import { useState } from 'react';
import Modal from 'react-modal'

import Dashboard from './Components/Dashboard';
import Header from './Components/Header';

import { GlobalStyle } from './styles/global';


Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransactionsModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal}/>
      <Dashboard/>

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>

      <GlobalStyle/>
    </>
  );
}

export default App;
