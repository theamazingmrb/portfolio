import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        font-size: 1.125rem;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        @media (min-width: 1200px) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }
    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }
`
export default GlobalStyle


export const theme1  = {
    primary: '#161925',
    secondary: '#e3dcc2',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222'
  }
  
  export const theme2 = {
    primary: '#ada296',
    secondary: '#0f1a20',
    danger: '#f16623',
    light: '#f4f4f4',
    dark: '#222'
  }