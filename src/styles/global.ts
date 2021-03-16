import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --red: #F36981;
    --green: #33cc95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media(max-width:720px) {
      font-size: 87.5% // 14px
    }
  }

  // rem = 1rem = 16px

  body {
    background-image: linear-gradient(to right, var(--blue), var(--green));
    -webkit-font-smoothing: antialiased;
  }

  body, input , textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 , h4 , h5 , h6 , strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {

    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    background-color: rgba(0, 0, 0, 0.5);

  }

 .react-modal-content {
   width: 100%;
   max-width: 576px;
   z-index: 999;
   padding: 3rem;
   position: relative;
   border-radius: 0.25rem;
   background-image: linear-gradient(to right, var(--blue), var(--green));
   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5)
  
 }

 .react-modal-close {
   position: absolute;
   right: 1.5rem;
   top: 1.5rem;
   border: 0;
   background: transparent;
 }

`;
