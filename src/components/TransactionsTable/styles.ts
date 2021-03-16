import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    thead {
      td {
        padding: 1rem 1rem;
        background: none;
        color: #fff;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
      }
    }

    tbody {
      tr {
        transition: all 0.3s;

        td {
          padding: 1rem 1.5rem;
          text-align: left;
          border: 0;
          color: #fff;
          border-radius: 0.25rem;

          &.deposit {
            color: var(--green);
          }

          &.withDraw {
            color: var(--red);
          }
        }

        &.withDraw:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
          background-color: rgb(221, 109, 134, 0.25);
        }

        &.deposit:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
          background-color: rgb(51, 204, 149, 0.24);
        }
      }
    }
  }
`;
