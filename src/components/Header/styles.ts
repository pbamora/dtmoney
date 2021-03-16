import styled from "styled-components";

export const Container = styled.header``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: none;
    backdrop-filter: blur(10px);
    padding: 0 2rem;
    border-radius: 0.25rem;
    border: 0;
    height: 3rem;
    
    transition: all 0.5s;
  }

  button:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;
