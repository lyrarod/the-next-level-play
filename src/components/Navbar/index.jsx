import Link from "next/link";
import styled from "styled-components";
import { ImRocket } from "react-icons/im";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;

  ul {
    display: flex;
  }

  li {
    list-style-type: none;

    a {
      font-size: 12px;
      color: ${(props) => props.theme.colors._2};
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 900;
      letter-spacing: 4px;
      padding: 10px;
      margin-left: 10px;
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
    color: ${(props) => props.theme.colors._1};

    h1 {
      text-transform: uppercase;
      font-weight: 900;
    }

    .rocket {
      font-size: 3rem;
    }
  }

  // NAVBAR MOBILE
  ${({ theme }) => theme.media.mobile} {
    position: initial;
    padding: 0;
    height: 60px;

    .logo {
      cursor: default;

      h1 {
        font-size: 1.25rem;
        letter-spacing: normal;
      }

      .rocket {
        font-size: 2rem;
      }
    }

    ul {
      display: none;
    }
  }

  ${({ theme }) => theme.media.min1920px} {
    height: 200px;
  }
`;

const ContainerNav = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  // ContainerNav Mobile
  ${({ theme }) => theme.media.mobile} {
    padding: 0;
    justify-content: center;
  }
`;

const Navbar = () => {
  const menus = ["home", "portfolio", "services", "about", "contact"];

  return (
    <Nav>
      <ContainerNav>
        <div className="logo">
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={fadeIn(-100, 100, 6, 2.5)}
            style={{ display: "flex" }}
            whileHover={{ scale: [1, 1.08, 1] }}
            whileTap={{ scale: [1, 1.2, 1] }}
          >
            <ImRocket className="rocket" />
          </motion.div>
          <motion.h1
            initial={"hidden"}
            animate={"visible"}
            variants={fadeIn(0, 0, 8.5)}
          >
            Chappo
          </motion.h1>
        </div>

        <ul>
          {menus.map((menu, i) => {
            const delay = i * 0.2;

            return (
              <motion.li
                key={i}
                initial={"hidden"}
                animate={"visible"}
                variants={fadeIn(0, 60, 2 + delay)}
              >
                <Link href={"/"}>
                  <a>{menu}</a>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </ContainerNav>
    </Nav>
  );
};

export default Navbar;
