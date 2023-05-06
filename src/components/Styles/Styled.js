import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  text-decoration: line-through;
  ${(props) =>
    props.theme === "dark" &&
    `
    background-color: #000;
    color : #fff
  
  `}
`;
