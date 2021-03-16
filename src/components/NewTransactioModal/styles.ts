import styled from "styled-components";

export const Content = styled.form`
  h2 {
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #fff;
    transition: all 0.3s;

    border: none;

    font-weight: 400;

    font-size: 1rem;

    &:hover {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      border: 1px solid #fff;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.25);
    }

    &:focus {
      outline: none;
    }

    & + input {
      margin: 0.5rem 0 0 0;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    margin: 1rem 0 0 0;
    height: 4rem;
    font-weight: 600;
    color: #ffff;
    background-color: transparent;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition: all 0.8s;

    &:hover {
      background-color: var(--blue);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "rgb(51, 204, 149, 0.24)",
  red: "rgb(221, 109, 134, 0.4)",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s;

  height: 4rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};
  border: ${(props) =>
    props.isActive ? `1px solid ${colors[props.activeColor]}` : "0"};
  box-shadow: ${(props) =>
    props.isActive ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "none"};

  img {
    margin-right: 0.5rem;
  }

  &.withDraw:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    background-color: rgb(221, 109, 134, 0.4);
  }

  &.deposit:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    background-color: rgb(51, 204, 149, 0.24);
  }

  &:focus {
    outline: none;
  }
`;
