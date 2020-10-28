import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, html, input {
    font-family: 'Roboto',Arial, Helvetica, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 1px;
    border-radius: 8px;
    background-color: #34a4eb;
  }
  ::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 0 4px 4px 0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
  }
`;
