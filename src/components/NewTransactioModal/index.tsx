import Modal from "react-modal";
import { Content, TransactionTypeContainer, RadioBox } from "./styles";
import incomImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleCloseNewTransactionModalOpen: () => void;
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  handleCloseNewTransactionModalOpen,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
      createdAt: new Date(),
    });

    setTitle("");
    setCategory("");
    setAmount(0);
    setType("deposit");
    handleCloseNewTransactionModalOpen();
  }

  return (
    <>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          className="react-modal-close"
          type="button"
          onClick={handleCloseNewTransactionModalOpen}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Content onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input
            placeholder="Título"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            placeholder="Valor"
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              onClick={() => setType("deposit")}
              className="deposit"
              isActive={type === "deposit"}
              activeColor={"green"}
              type="button"
            >
              <img src={incomImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              onClick={() => setType("withDraw")}
              className="withDraw"
              isActive={type === "withDraw"}
              activeColor={"red"}
              type="button"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Content>
      </Modal>
    </>
  );
}
