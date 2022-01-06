import { useState } from 'react';
import Modal from 'react-modal'

import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import NewTransactionModal from './Components/NewTransactionModal';

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

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />

      <GlobalStyle/>
    </>
  );
}

export default App;
