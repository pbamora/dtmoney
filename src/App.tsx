import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactioModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />
        <DashBoard />
        <NewTransactionModal
          isNewTransactionModalOpen={isNewTransactionModalOpen}
          handleCloseNewTransactionModalOpen={
            handleCloseNewTransactionModalOpen
          }
        />
      </TransactionsProvider>
      <GlobalStyle />
    </>
  );
}
