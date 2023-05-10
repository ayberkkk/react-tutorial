import styled from "styled-components";

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: line-through;
  ${(props) =>
    props.theme === "dark" &&
    `
    background-color: #000;
    color : #fff
  
  `}
`;
