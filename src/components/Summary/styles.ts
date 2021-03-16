import styled from "styled-components";

const colors = {
  green: "rgb(51, 204, 149, 0.24)",
  red: "rgb(221, 109, 134, 0.4)",
  blue: "rgb(84,41,204, 0.4)",
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #fff;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition: all 0.6s;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;

      div {
        background-color: rgb(255,255,255, 0.3);
        width: 75%;
      }
    }

    &.highlight-background {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      margin: -0.4rem;
      background: ${colors.blue};
      color: #fff;

      button {
        border: 0;
        background: transparent;
      }

      button:focus {
        outline: none;
      }
    }

    &.income:hover {
      margin: -0.4rem;
      background: ${colors.green};
    }

    &.outcome:hover {
      margin: -0.4rem;
      background: ${colors.red};
    }
  }
`;
