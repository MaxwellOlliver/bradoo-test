import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  min-width: 100px;
  height: 50px;

  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px 10px #0000000a;

  position: relative;
  cursor: pointer;

  div.find-btn {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    background-color: #fff;
    border-radius: 8px;

    transition: background-color 0.3s;
  }

  span,
  select {
    width: 50%;
    height: 50px;
    border-radius: 8px;
  }

  .select-modal {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 55px;
    background-color: #fff;
    border-radius: 8px;
    list-style: none;
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 0 20px 10px #0000000a;

    li {
      width: 100%;
      min-height: 50px;
      font-size: 14px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      color: #63708a;
      cursor: pointer;
      transition: background-color 0.3s;

      &:first-child {
        border-radius: 8px 8px 0 0;
      }

      &:last-child {
        border-radius: 0 0 8px 8px;
      }
      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #878787;
    font-size: 14px;
    margin-right: 5px;
    pointer-events: none;
  }

  span.fieldName {
    color: #34a4eb;
    justify-content: flex-start;
    margin-right: 0px;
  }
`;
