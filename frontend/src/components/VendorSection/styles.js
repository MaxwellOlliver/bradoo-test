import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
`;

export const InputSearch = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 20px;

  .wrap {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    padding-left: 15px;

    background-color: #fff;
    border-radius: 8px;

    margin-right: 10px;
    box-shadow: 0 0 20px 10px #0000000a;

    svg {
      margin-right: 10px;
    }

    input {
      height: 50px;
      width: calc(100% - 20px);
      font-size: 14px;
      color: #333;
      font-weight: 700;
      padding: 0 10px;

      border-radius: 0 8px 8px 0;

      &::placeholder {
        font-weight: 700;
        color: #63708a;
      }
    }
  }
`;

export const VendorList = styled.div`
  width: 100%;
  height: 100%;

  .labels {
    display: flex;
    height: 30px;
    border-radius: 8px;
    background-color: #fff;

    margin-bottom: 10px;
    box-shadow: 0 0 20px 10px #0000000a;

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
    max-height: calc(100vh - 170px) !important;
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    overflow-y: auto;

    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 20px 10px #0000000a;
    list-style: none;

    li.no-results {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b5b5b5;
      font-weight: 700;
    }

    li.loader {
      padding: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 30px;
      }
    }
  }
`;
