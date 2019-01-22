import React, { Component } from "react";
import "./App.css";
import MarkdownInput from "./MarkdownInput";
import styled from "styled-components";
import sampleMarkdown from "./sampleMarkdown";
import Toolbar from "./Toolbar";

class App extends Component {
  render() {
    return (
      <Container>
        <MarkdownInput>
          {({ setText, markdown }) => (
            <>
              <Toolbar name={"editor"} />
              <Toolbar name={"preview"} />
              <TextArea onChange={setText} defaultValue={sampleMarkdown} />
              <Output dangerouslySetInnerHTML={markdown} />
            </>
          )}
        </MarkdownInput>
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  margin: 20px;
`;

const Output = styled.div`
  background: #414362;
  border: 3px solid #5a5c7b;
  height: 80vh;
  width: 80%;
  border-radius: 5px;
  overflow: auto;
  color: white;
  padding: 10px 10px;
`;

const TextArea = styled.textarea`
  background: #5a5c7b;
  border: 3px solid #7c7e97;
  border-radius: 5px;
  width: 80%;
  height: 80vh;
  resize: none;
  overflow: auto;
  color: white;
  padding: 10px 10px;
`;

export default App;
