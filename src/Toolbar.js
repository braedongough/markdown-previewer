import React, { Component } from "react";
import styled from "styled-components";

export default class Toolbar extends Component {
  render() {
    return <Bar>{this.props.name}</Bar>;
  }
}

const Bar = styled.div`
  background: white;
  width: calc(80% + 15px);
  padding-left: 10px;
  margin-left: 5px;
  border-radius: 5px;
  border: 3px solid ${props => props.theme};
`;
