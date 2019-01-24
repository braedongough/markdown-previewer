import { Component } from "react";
import marked from "marked";
import sampleMarkdown from "./sampleMarkdown";

export default class MarkdownInput extends Component {
  state = {
    markdown: {
      __html: ""
    }
  };
  componentDidMount() {
    this.setState({
      markdown: {
        __html: marked(sampleMarkdown, { gfm: true, breaks: true })
      }
    });
  }
  setText = e => {
    const text = e.target.value;
    this.setState({
      markdown: {
        __html: marked(text)
      }
    });
  };
  render() {
    const { children } = this.props;
    return children({
      markdown: this.state.markdown,
      setText: this.setText
    });
  }
}
