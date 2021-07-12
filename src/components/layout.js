import React, {useState, createContext} from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle, { theme1, theme2 } from "./globalStyle"
import Header from "./header"
import Footer from "./Footer"
const Context = React.createContext();

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  background-color: ${props => props.theme.primary};
  color:  ${props => props.theme.secondary};
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`

const Layout = ({ children }) => {

  const [theme, setTheme] = useState(theme1)
 
  const toggleTheme = () => {
    theme === theme1 ? setTheme(theme2) : setTheme(theme1)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
      <GlobalStyle  />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main id="main-content">{children}</main>
      <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}

export default Layout