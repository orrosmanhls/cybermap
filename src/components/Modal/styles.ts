import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* z-index: 10; */
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  height: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  /* position: relative; */
  z-index: 10;
  border-radius: 10px;
`;

export const ExitButton = styled.button`
  height: 40px;
  width: 100px;
  color: white;
  background-color: blue;
  font-weight: bold;
  text-transform: uppercase;
  margin: ${(props) => props.theme.spacing(1)} 0;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
