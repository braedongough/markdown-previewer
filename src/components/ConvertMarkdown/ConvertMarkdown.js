import { Component } from "react";
import marked from "marked";
import sampleMarkdown from "../../sampleMarkdown";

export default class ConvertMarkdown extends Component {
  state = {
    markup: {
      __html: ""
    }
  };
  componentDidMount() {
    this.setState({
      markup: {
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
      convertedText: this.state.markup,
      setText: this.setText
    });
  }
}
