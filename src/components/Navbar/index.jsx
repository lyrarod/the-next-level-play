import Link from "next/link";
import styled from "styled-components";
import { ImRocket } from "react-icons/im";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0 2px 2px #0002; */
  /* background: tomato; */
  /* overflow: hidden; */
  z-index: 1000;

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    margin-left: 10px;

    a {
      font-size: 12px;
      color: ${(props) => props.theme.colors._2};
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 900;
      letter-spacing: 4px;
      padding: 10px;
      transition: 0.2s;

      &:hover {
        color: ${(props) => props.theme.colors._4};
      }
    }

    &:last-child {
      a {
        color: ${(props) => props.theme.colors._6};
        background: ${(props) => props.theme.colors._4};
        border-radius: 4px;
        /* padding-right: 0; */
        transition: 0.2s;

        &:hover {
          color: ${(props) => props.theme.colors._5};
          box-shadow: 2px 2px 3px #0003;
        }
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors._2};

    h1 {
      letter-spacing: 2px;
    }
  }
`;

const Navbar = () => {
  const menus = ["home", "portfolio", "services", "about", "contact"];

  return (
    <Nav>
      <motion.div
        className="logo"
        initial={"hidden"}
        animate={"visible"}
        variants={fadeIn(0, 0, 2)}
      >
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={fadeIn(-100, 100, 6, 2.5)}
          style={{ display: "flex" }}
        >
          <ImRocket size={"3rem"} />
        </motion.div>
        <h1>Liracode</h1>
      </motion.div>

      <ul>
        {menus.map((menu, i) => {
          // const link = menu === "home" ? "/" : `/${menu}`;
          const link = "/";
          const delay = i * 0.2;

          return (
            <motion.li
              key={i}
              initial={"hidden"}
              animate={"visible"}
              variants={fadeIn(0, 50, 2 + delay)}
            >
              <Link href={link} passHref>
                <a>{menu}</a>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navbar;
