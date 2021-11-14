import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
      }}
    >
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
