import { Container } from "./styles";
import incomImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import eyeClosed from "../../assets/eye-closed.svg";
import eye from "../../assets/eye.svg";
import { useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const [viewTotal, setViewTotal] = useState(false);

  let summary = {
    deposit: 0,
    withDraw: 0,
    total: 0,
  };

  for (let index = 0; index < transactions.length; index++) {
    const element = transactions[index];

    if (element.type === "deposit") {
      summary.deposit += element.amount;
    } else {
      summary.withDraw += element.amount;
    }

    summary.total = summary.deposit - summary.withDraw;
  }

  return (
    <Container>
      <div className="income">
        <header>
          <p>Entradas</p>
          <img src={incomImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposit)}
        </strong>
      </div>

      <div className="outcome">
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saidas" width="30" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withDraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <button type="button" onClick={() => setViewTotal(!viewTotal)}>
            {!viewTotal ? (
              <img src={eyeClosed} alt="Olho fechado" width="30" />
            ) : (
              <img src={eye} alt="Olho" width="30" />
            )}
          </button>
        </header>
        <strong>
          {!viewTotal ? (
            <div />
          ) : (
            <>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(summary.total)}
            </>
          )}
        </strong>
      </div>
    </Container>
  );
}
