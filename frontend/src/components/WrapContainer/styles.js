import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: #f5f5f5;

  aside {
    width: 70px;
    background-color: #34a4eb;

    height: 100%;
    display: flex;
    flex-direction: column;

    box-shadow: 0 0 20px 10px #0000000a;

    button {
      background-color: transparent;
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: #379bdb;
      }

      &:first-child {
        border-radius: 8px 8px 0 0;
      }
      svg {
        margin: 5px;
      }
      span {
        color: #333;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .products-actions {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 10px;

    button {
      width: 100%;
      height: 50px;
      background-color: #34a4eb;
      margin-bottom: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;
      box-shadow: 0 0 20px 10px #00000010;

      cursor: pointer;

      svg {
        margin-right: 5%;
      }

      span {
        color: #fff;
      }

      &:hover {
        background-color: #379bdb;
      }
    }
  }
`;
