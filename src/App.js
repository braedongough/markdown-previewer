import React, { Component } from "react";
import styled from "styled-components";

import MarkdownInput from "./MarkdownInput";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import { AppContainer } from "./components/Containers/Containers";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <MarkdownInput>
          {({ setText, markdown }) => (
            <>
              <Editor onChange={setText} name={"Editor"} emoji={"📥"} />
              <Preview
                dangerouslySetInnerHTML={markdown}
                name={"Preview"}
                emoji={"📬"}
              />
            </>
          )}
        </MarkdownInput>
      </AppContainer>
    );
  }
}

export default App;
