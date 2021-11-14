import Navbar from "../Navbar";
import styled from "styled-components";

const ContainerLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme: { maxWidth } }) => maxWidth};
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <ContainerLayout>
      <Navbar />
      {children}
    </ContainerLayout>
  );
};

export default Layout;
