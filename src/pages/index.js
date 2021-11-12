import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import { motion } from "framer-motion";
import devImg from "../../public/assets/dev.svg";
import { Circle, Paralelogram } from "../components/Shape";
import { fadeIn } from "../animations";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Homepage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* padding: 100px; */
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 100px;
  background: ${(props) => props.theme.colors._5};
  background-image: url("/assets/brushed-alum.png");
`;

const CardLeft = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  /* background-color: #663399; */
  color: ${({ theme }) => theme.colors._1};
  padding-left: 3rem;

  .content {
    width: 100%;
    /* background-color: tomato; */

    p {
      font-size: 5rem;
      line-height: 0.85;
      letter-spacing: 12px;
      font-weight: 900;
      /* text-shadow: 2px 2px 2px #663399; */
    }
    .the {
      /* font-style: oblique; */
    }
    .next {
      font-size: 12rem;
      text-transform: uppercase;
      background-image: linear-gradient(90deg, #663399, #339999);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: none;
    }
    .lvlplay {
      font-style: oblique;
      letter-spacing: 15px;
    }
    .btns {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      margin-top: 3rem;
      /* padding: 0 4px; */

      button {
        border: 2px solid #339999;
        color: #339999; //#2d3142
        width: 340px;
        padding: 8px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 6px;
        border-radius: 4px;
        background: transparent;
        transition: 0.2s;

        &:hover {
          cursor: pointer;
          box-shadow: 4px 4px 6px #0005;
        }
      }

      .btn {
        color: ${(props) => props.theme.colors._5};
        background: ${(props) => props.theme.colors._4};
        margin-right: 30px;
      }
    }
  }
`;

const CardRight = styled(motion.div)`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  /* padding: 16px; */
  /* background: #339999; */
  z-index: 100;
`;

const SocialIcons = styled.ul`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);

  li {
    list-style-type: none;
  }

  svg {
    margin: 4px 0;
    cursor: pointer;
    font-size: 2.8rem;
    color: ${(props) => props.theme.colors._3};
    background: transparent;
    padding: 12px;
    border-radius: 50%;
    box-shadow: 2px 2px 3px #0005;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
      /* box-shadow: 2px 2px 3px #0005; */
    }
  }
`;

export default function Home() {
  return (
    <Homepage>
      <Head>
        <title>Liracode | The Next Level Play</title>
      </Head>
      <Container>
        <CardLeft>
          <div className="content">
            <motion.p
              className="the"
              initial={"hidden"}
              animate={"visible"}
              variants={fadeIn(0, 100, 0)}
            >
              The
            </motion.p>
            <motion.p
              className="next"
              initial={"hidden"}
              animate={"visible"}
              variants={fadeIn(0, 100, 0.2)}
            >
              Next
            </motion.p>
            <motion.p
              className="lvlplay"
              initial={"hidden"}
              animate={"visible"}
              variants={fadeIn(0, 100, 0.4)}
            >
              Level Play
            </motion.p>
            <div className="btns">
              <motion.button
                initial={"hidden"}
                animate={"visible"}
                variants={fadeIn(0, 100, 0.6)}
                className="btn"
              >
                Get Started
              </motion.button>
              <motion.button
                initial={"hidden"}
                animate={"visible"}
                variants={fadeIn(0, 100, 0.8)}
              >
                Read more
              </motion.button>
            </div>
          </div>
        </CardLeft>
        <CardRight
          initial={"hidden"}
          animate={"visible"}
          variants={fadeIn(140, 0, 2, 2)}
        >
          <Image src={devImg} alt="Development Image" priority />
        </CardRight>

        <SocialIcons>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            variants={fadeIn(0, 100, 2)}
          >
            <FaFacebookF />
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            variants={fadeIn(0, 100, 2 + 0.2)}
          >
            <FaTwitter />
          </motion.li>
          <motion.li
            initial={"hidden"}
            animate={"visible"}
            variants={fadeIn(0, 100, 2 + 0.4)}
          >
            <FaInstagram />
          </motion.li>
        </SocialIcons>

        <Circle
          width="50vh"
          height="50vh"
          bottom="-25vh"
          left="-25vh"
          background="#663399"
          background-image='url("/assets/brushed-alum.png")'
          initial={"hidden"}
          animate={"visible"}
          variants={fadeIn(0, 0, 4, 2)}
          box-shadow="10px -10px 20px #0005"
        />

        <Paralelogram
          width="100vh"
          height="85vh"
          top="10vh"
          right="5vh"
          background="linear-gradient(#855cad, #339999)"
          // background-image='url("/assets/brushed-alum.png")'
          initial={"hidden"}
          animate={"visible"}
          variants={fadeIn(0, 0, 4, 2)}
          box-shadow="0 12px 12px #0005"
        />
      </Container>
    </Homepage>
  );
}
