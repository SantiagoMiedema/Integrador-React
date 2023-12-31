import styled from "styled-components";
import { motion } from 'framer-motion';

export const BotonStyled = styled(motion.button)`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ selected }) =>
    selected ? '#4D77D8' : '#152039'};
    
    color: white;
    border: none;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 15px;
    font-family: "Montserrat" ,sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: auto;

    &:hover {
    background-color: #4D77D8;
    transition: 500ms;
  }

    &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`