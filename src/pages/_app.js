import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body{
    background-color: #fff;
    background-image: url("/assets/brushed-alum.png");    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const theme = {
  colors: {
    _1: "#2d3142",
    _2: "#663399",
    _3: "#855cad",
    _4: "#339999",
    _5: "#fff",
    _6: "#f5f5f5",
  },
  media: {
    mobile: "@media screen and (max-width: 768px)",
    min1920px: "@media screen and (min-width: 1921px)",
  },
  maxWidth: `${1440}px`,
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
