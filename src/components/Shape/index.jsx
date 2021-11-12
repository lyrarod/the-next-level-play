import styled from "styled-components";
import { motion } from "framer-motion";

const CircleStyled = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  ${(props) => props}
`;

const ParalelogramStyled = styled(motion.div)`
  position: absolute;
  /* clip-path: polygon(50% 0, 100% 0%, 100% 100%, 100% 100%); */
  border-radius: 30% 70% 67% 33% / 30% 30% 70% 70%;
  ${(props) => props}
`;

export const Circle = (props) => <CircleStyled {...props} />;

export const Paralelogram = (props) => <ParalelogramStyled {...props} />;
