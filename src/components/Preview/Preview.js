import React from "react";
import styled from "styled-components";
import sampleMarkdown from "../../sampleMarkdown";
import { Toolbar } from "../Toolbar/Toolbar";
import { SectionContainer } from "../Containers/Containers";

const Preview = props => (
  <SectionContainer>
    <Toolbar>
      <div>{props.name}</div>
      <div className={"emoji"}>{props.emoji}</div>
    </Toolbar>
    <Section dangerouslySetInnerHTML={{ __html: sampleMarkdown }} />
  </SectionContainer>
);

const Section = styled.section`
  background: #414362;
  border: 3px solid #5a5c7b;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  resize: none;
  overflow: auto;
  color: white;
  padding: 30px 10px;
  border-top: 0;
  margin-top: 10px;
`;

export default Preview;
