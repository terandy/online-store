import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  /* color */
  background-color: white;
  border: lightgrey solid 1px;
  /* position */
  position: absolute;
  top: 0;
  left: 0;
  /* size */
  width: ${(props) => (props.isVisible ? "400px" : "40px")};
  height: 100%; /* 100% of body */
  overflow: hidden;
  /* effect */
  transition: width 0.3s ease-in-out;
`;
