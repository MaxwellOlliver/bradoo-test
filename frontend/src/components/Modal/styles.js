import styled from 'styled-components';

export const DeleteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000080;
  z-index: 20000;

  display: flex;
  align-items: center;
  justify-content: center;

  .modal-window {
    width: 350px;
    height: 300px;
    padding: 30px;
    border-radius: 8px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      font-size: 25px;
      text-align: center;
      font-weight: 700;
      color: #333;
      margin-bottom: 40px;
    }

    img {
      width: 300px;
    }

    .row {
      display: flex;
      width: 100%;
    }

    .row button {
      border-radius: 8px;
      width: 100%;
      height: 50px;
      background-color: transparent;
      color: #333;
      font-size: 14px;
      font-weight: 700;
      background-color: #ddd;
      cursor: pointer;

      &:first-child {
        margin-right: 5px;
      }
      &.focused {
        color: #fff;
        background-color: #34a4eb;
      }
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const CreateContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000080;
  z-index: 20000;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 8% 0;

  .animation {
    display: flex;
    align-self: center;
    img {
      width: 400px;
      border-radius: 8px;
    }
  }

  .products-list {
    width: 400px;
    padding: 30px 40px;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 20px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
      color: #333;
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .labels {
      width: 100%;
      height: 30px;
      font-size: 14px;
      display: flex;
      margin-bottom: 10px;
      box-shadow: 0 5px 10px -5px #00000010;

      span {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% / 3);
        font-size: 14px;
        font-weight: 700;
        color: #b5b5b5;
      }
    }

    ul {
      width: 100%;
      list-style: none;
      max-height: 300px;
      min-height: 300px;
      overflow-y: auto;
      padding: 10px;

      span.no-products {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #b5b5b5;
        font-weight: 700;
      }

      li {
        width: 100%;
        height: 40px;
        font-size: 14px;
        display: flex;
        margin-bottom: 10px;

        box-shadow: 0 0 10px 3px #00000010;
        border-radius: 8px;

        position: relative;

        span {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: calc(100% / 3);
          font-size: 14px;
        }

        svg {
          display: none;
          position: absolute;
          right: 3px;
          top: calc(50% - 7px);
          cursor: pointer;
        }

        &:hover {
          svg {
            display: block;
          }
        }
      }
    }
  }

  form {
    width: 450px;
    padding: 30px 50px;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 20px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    > h3 {
      color: #333 !important;
    }

    h3 {
      color: #333;
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .sub-form {
      padding: 30px;
      border-radius: 8px;
      background-color: #f3f3f3;

      margin-bottom: 10px;
      margin-top: 30px;
    }

    input {
      width: 100%;
      height: 40px;

      border: 1px solid #0000001b;
      border-radius: 8px;
      margin-bottom: 10px;
      padding: 0 10px;

      padding: 0 10px;
      font-size: 14px;
      color: #333;

      &::placeholder {
        color: #aaa;
        font-size: 14px;
        font-weight: 700;
      }

      &[name='cnpj'] {
        border-color: ${(props) =>
          props.cnpjIsValid ? '#0000001b' : '#f56262'};
        color: ${(props) => (props.cnpjIsValid ? '#333' : '#f56262')};
      }
    }

    .row {
      display: flex;
      width: 100%;

      button[type='submit'] {
        margin-right: 10px;
      }

      button#back {
        border-radius: 8px;
        width: 100%;
        height: 40px;
        background-color: transparent;
        color: #333;
        font-size: 14px;
        background-color: #ddd;
        cursor: pointer;

        &:first-child {
          margin-right: 5px;
        }
        &.focused {
          color: #fff;
          background-color: #34a4eb;
        }
        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    button {
      width: 100%;
      height: 40px;
      background-color: #34a4eb;
      color: #fff;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;

      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
