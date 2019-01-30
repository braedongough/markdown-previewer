import React, { Component } from "react";
import ConvertMarkdown from "./components/ConvertMarkdown/ConvertMarkdown";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import { AppContainer } from "./components/Containers/Containers";
import sampleMarkdown from "./sampleMarkdown";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <ConvertMarkdown>
          {({ setText, convertedText }) => (
            <>
              <Editor
                onChange={setText}
                name={"Editor"}
                emoji={"📥"}
                defaultValue={sampleMarkdown}
              />
              <Preview
                dangerouslySetInnerHTML={convertedText}
                name={"Preview"}
                emoji={"📬"}
              />
            </>
          )}
        </ConvertMarkdown>
      </AppContainer>
    );
  }
}

export default App;
