import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import { motion } from "framer-motion";
import { Circle, Paralelogram } from "../components/Shape";
import { fadeIn } from "../animations";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Homepage = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  ${({ theme }) => theme.media.mobile} {
    padding: 0;
    height: 100%;
    flex-direction: column;
  }
`;

const CardLeft = styled(motion.div)`
  width: 50%;
  display: flex;
  position: relative;
  color: ${({ theme }) => theme.colors._1};

  .content {
    width: 100%;

    p {
      font-size: 5rem;
      line-height: 0.85;
      letter-spacing: 12px;
      font-weight: 900;
    }

    .next {
      font-size: 10rem;
      text-transform: uppercase;
      background-image: linear-gradient(90deg, #663399, #339999);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: none;
    }
    .lvlplay {
      font-style: oblique;
      letter-spacing: 5px;
    }
    .btns {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      button {
        border: 2px solid #339999;
        color: #339999; //#2d3142
        width: 240px;
        padding: 6px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4px;
        border-radius: 2px;
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

  // MOBILE DEVICE CARDLEFT
  ${(props) => props.theme.media.mobile} {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    .content {
      width: 100%;
      height: 100%;
      display: grid;
      place-content: center;

      p {
        font-size: 3.2rem;
        letter-spacing: normal;
      }

      .next {
        font-size: 6.3rem;
        text-transform: uppercase;
        background-image: linear-gradient(90deg, #663399, #339999);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: none;
      }
      .lvlplay {
        font-style: oblique;
        letter-spacing: inherit;
      }
      .btns {
        flex-direction: column;

        button {
          border: 1px solid #339999;
          color: #339999; //#2d3142
          width: 100%;
          padding: 6px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 3px;
          border-radius: 2px;
          background: transparent;
          transition: 0.2s;
          font-size: 12px;

          &:hover {
            cursor: default;
            box-shadow: 1px 1px 2px #0005;
          }
        }

        .btn {
          color: ${(props) => props.theme.colors._5};
          background: ${(props) => props.theme.colors._4};
          margin-right: 0;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const CardRight = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  // MOBILE DEVICE CARDRIGHT
  ${({ theme }) => theme.media.mobile} {
    width: 96%;
    margin-top: -80px;
    justify-content: center;
  }
`;

const SocialIcons = styled.ul`
  position: absolute;
  top: 50%;
  left: -4rem;
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
    }
  }

  //SOCIALICONS MOBILE
  ${(props) => props.theme.media.mobile} {
    position: relative;
    top: 0;
    left: 0;
    transform: translateY(0);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0;

    li {
      display: flex;
    }

    svg {
      margin: 0 8px;
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors._3};
      background: transparent;
      padding: 10px;
      border-radius: 50%;
      box-shadow: 1px 1px 1px #0005;
      cursor: default;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>The Next Level Play | Chapo</title>
      </Head>

      <Homepage>
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
          </CardLeft>

          <CardRight
            initial={"hidden"}
            animate={"visible"}
            variants={fadeIn(140, 0, 2, 2)}
          >
            <Image
              src="/assets/dev.svg"
              alt="Development Image"
              width={700}
              height={700}
            />

            <Paralelogram
              initial={"hidden"}
              animate={"visible"}
              variants={fadeIn(0, 0, 4)}
            />
          </CardRight>
        </Container>
        <Circle
          initial={"hidden"}
          animate={"visible"}
          variants={fadeIn(0, 0, 4)}
        />
      </Homepage>
    </>
  );
}
