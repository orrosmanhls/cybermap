import styled from "styled-components";

export const Card = styled.div`
  height: 163px;
  width: 138px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary.main};
  border-radius: 1.5rem 1.5rem 0 0;
  border-bottom: 6px solid #f68b1f;
  padding: 20px 10px 0;
  margin: 0 0.5rem 1rem;
  cursor: pointer;

  // box-sizing
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  flex-grow: 1;
`;

export const CompanyLogo = styled.img`
  object-fit: contain;
  margin: auto;
  width: 109px;
  height: 70px;
  max-width: 100%;
`;

export const CompanyName = styled.div`
  display: flex;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  color: ${(props) => props.theme.colors.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  /* overflow-y: hidden; */
`;
