import React, { Component } from "react";
import styled from "@emotion/styled";

import { Logo } from "../components";
import Settings from "./Settings";
import Editor from "./Editor";
import Controls from "./Controls";
import Results from "./Results";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

class App extends Component {
  render() {
    console.log("rerendered");
    return (
      <AppContainer>
        <Logo />
        <Settings />
        <Editor />
        <Controls />
        <Results />
      </AppContainer>
    );
  }
}

export default App;
