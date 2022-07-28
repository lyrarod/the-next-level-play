import styled from "styled-components";
import { motion } from "framer-motion";

export const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 100%;

  width: 46vh;
  height: 46vh;
  bottom: -25vh;
  left: -25vh;
  background: #663399;
  background-image: url("/assets/brushed-alum.png");
  box-shadow: 8px -8px 10px #0003;
  z-index: -1;

  ${(props) => props.theme.media.mobile} {
    display: none;
  }

  ${(props) => props}
`;

export const Paralelogram = styled(motion.div)`
  position: absolute;
  border-radius: 30% 70% 67% 33% / 30% 30% 70% 70%;

  width: 110%;
  height: 80%;
  top: 12%;
  left: 0;
  background: linear-gradient(#855cad, #339999);
  box-shadow: 0 10px 10px #0003;
  z-index: -1;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }

  ${({ theme }) => theme.media.min1920px} {
    height: 70%;
    top: 15%;
  }

  ${(props) => props}
`;
