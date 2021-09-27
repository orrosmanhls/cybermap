import styled from "styled-components";

import { isBoxProp } from "../../map.types";

export const Card = styled.div<isBoxProp>`
  height: 163px;
  width: 138px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary.main};
  border-bottom: 6px solid #f68b1f;

  margin: 0 0.5rem 1rem;
  cursor: pointer;
  ${({ isBox }) =>
    isBox
      ? `
    width: 100px;
    height: 100px;
    padding: 1rem 0.675rem;
    border-radius: 7px 7px 0 0;
  `
      : `
    padding: 20px 10px 0;
    height: 163px;
    width: 138px;
    border-radius: 1.5rem 1.5rem 0 0;
  `}

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
