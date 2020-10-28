import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;

  header {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 20px 10px #0000000a;
    border-radius: 8px;
    padding: 20px;

    h3 {
      color: #333;
    }
  }

  .labels {
    width: 100%;

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
    height: calc(100% - 40px);
    max-height: calc(100vh - 170px);
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

    position: relative;

    li.no-results {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b5b5b5;
      font-weight: 700;
    }
  }
`;
