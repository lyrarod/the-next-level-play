import styled from "styled-components";
import { motion } from "framer-motion";

const CircleStyled = styled(motion.div)`
  position: absolute;
  border-radius: 50%;

  width: 50vh;
  height: 50vh;
  bottom: -25vh;
  left: -25vh;
  background: #663399;
  background-image: url("/assets/brushed-alum.png");
  box-shadow: 8px -8px 10px #0003;
  z-index: -1;

  ${(props) => props}

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`;

const ParalelogramStyled = styled(motion.div)`
  position: absolute;
  /* clip-path: polygon(50% 0, 100% 0%, 100% 100%, 100% 100%); */
  border-radius: 30% 70% 67% 33% / 30% 30% 70% 70%;

  width: 116%;
  height: 86%;
  top: 10%;
  right: -7%;
  background: linear-gradient(#855cad, #339999);
  box-shadow: 0 10px 10px #0004;
  z-index: -1;

  ${(props) => props}

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`;

export const Circle = (props) => <CircleStyled {...props} />;

export const Paralelogram = (props) => <ParalelogramStyled {...props} />;
