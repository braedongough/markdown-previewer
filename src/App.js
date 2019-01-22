import React, { Component } from "react";
import "./App.css";
import MarkdownInput from "./MarkdownInput";
import styled from "styled-components";
import sampleMarkdown from "./sampleMarkdown";

class App extends Component {
  render() {
    return (
      <Container>
        <MarkdownInput>
          {({ setText, markdown }) => (
            <>
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
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 20px;
`;

const Output = styled.div`
  background: #414362;
  border: 3px solid #5a5c7b;
  width: 100%;
  height: 80vh;
  border-radius: 5px;
  overflow: auto;
  color: white;
`;

const TextArea = styled.textarea`
  background: #5a5c7b;
  border: 3px solid #7c7e97;
  width: 100%;
  height: 80vh;
  border-radius: 5px;
  resize: none;
  overflow: auto;
  color: white;
`;

export default App;
