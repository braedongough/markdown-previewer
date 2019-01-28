import React from "react";
import styled from "styled-components";
import sampleMarkdown from "../../sampleMarkdown";
import { Toolbar } from "../Toolbar";

const Editor = props => (
  <Container>
    <Toolbar>
      <div>{props.name}</div>
      <div className={"emoji"}>{props.emoji}</div>
    </Toolbar>
    <Textarea defaultValue={sampleMarkdown} />
  </Container>
);

const Container = styled.section`
  position: relative;
  width: 80%;
  height: 75vh;
`;

const Textarea = styled.textarea`
  background: #5a5c7b;
  border: 3px solid #7c7e97;
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

export default Editor;
