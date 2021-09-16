import styled from "styled-components";

interface ContainerProps {
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center";
  align?: "flex-start" | "flex-end" | "center";
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  width: 100%;
  background: linear-gradient(to bottom right, #15181b, #23282d);
`;
