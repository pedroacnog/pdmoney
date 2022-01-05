import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
   
    --blue-ligth: #6933FF;
   
    --text-title: #363f5f;
    --text-body: ;
    --shape: #FFFFFF;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media(max-width: 720) {
      font-size: 87.5% //  14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`