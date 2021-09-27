import styled from "styled-components";
// place all colors, spacing and global classes
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    font-family: ${(props) => props.theme.typography.fonts[0]};
    background: linear-gradient(to bottom right, #15181b, #23282d);
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.colors.secondary.main};
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;  
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
`;
