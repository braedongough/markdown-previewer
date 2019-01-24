import React, { Component } from "react";
import styled from "styled-components";

export default class Toolbar extends Component {
  render() {
    return (
      <Bar>
        <div>{this.props.name}</div>
        <div className={"emoji"}>{this.props.emoji}</div>
      </Bar>
    );
  }
}

const Bar = styled.div`
  background: white;
  width: calc(80% + 12.5px);
  padding: 0 5px;
  border-radius: 5px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  margin-bottom: -20px;
  z-index: 100;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  & .emoji {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
