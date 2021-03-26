import {
  createGlobalStyle,
} from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'PT Sans Caption', sans-serif;
    font-size: 14px;

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 16px;
    }

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #EFEFEF;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #167ABC;
  border-radius: 10px;
  border: 3px solid #EFEFEF;
}

  body {
    background: #E5E5E5 0% 0% no-repeat padding-box;

  }

  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-bottom: 2.5rem;
    background-color: #fff;
  }
`

export default GlobalStyles
