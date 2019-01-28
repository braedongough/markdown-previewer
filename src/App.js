import React, { Component } from "react";
import MarkdownInput from "./MarkdownInput";
import styled from "styled-components";
import sampleMarkdown from "./sampleMarkdown";
import Editor from "./components/Editor/Editor";

class App extends Component {
  render() {
    return (
      <Container>
        <MarkdownInput>
          {({ setText, markdown }) => (
            <>
              {/* <Toolbar name={"Editor"} theme={"#5a5c7b"} emoji={"📥"} /> */}
              {/* <Toolbar name={"Preview"} emoji={"📬"} /> */}

              <Editor onChange={setText} name={"Editor"} emoji={"📥"} />
              <Preview dangerouslySetInnerHTML={markdown} />
            </>
          )}
        </MarkdownInput>
      </Container>
    );
  }
}

/*
<Container> 
  <Editor> relative
    <Toolbar /> absolute 
    <Input /> 
  </Editor>

  <Preview>
    <Toolbar />
  </Preview>
</Container>
*/

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-items: center;
  margin: 20px;
`;

const Preview = styled.div`
  background: #414362;
  border: 3px solid #5a5c7b;
  height: calc(80vh + 30px);
  width: 80%;
  border-radius: 5px;
  overflow: auto;
  color: white;
  padding: 10px 10px;
  border-top: 0;
`;

export default App;
