import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#f0f0f0' : '')} !important;
  transition: background-color 0.3s;

  position: relative;

  div.selected {
    display: ${(props) => (props.selected ? 'block' : 'none')};
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #34a4eb;
    top: calc(50% - 7.5px);
    left: 2%;
  }

  &:hover {
    background-color: #f0f0f0 !important;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:nth-child(2n) {
    background-color: #f2faff;
  }

  span {
    justify-content: center;
    width: calc(100% / 3);
    color: #333;

    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }
`;
