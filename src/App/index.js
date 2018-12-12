import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/lib/Button";
import AceEditor from "react-ace";

import "brace/mode/sql";
import "brace/theme/github";
import "brace/ext/language_tools";

import store from "../store";

import { Logo } from "../components";

const editorStyle = {
  width: "49rem",
  height: "16rem",
  fontSize: "1rem",
  margin: "0.5rem",
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const EditorContainer = styled.div`
  border-color: #000;
  border-width: 2px;
  border-style: solid;
  margin: 1rem;
`;

@observer
class App extends Component {
  render() {
    return (
      <AppContainer>
        <Logo />
        <EditorContainer>
          <AceEditor
            mode="sql"
            theme="github"
            enableLiveAutocompletion={store.isAutocompleteEnabled}
            wrapEnabled={store.isWrapEnabled}
            showGutter={store.shouldShowGutter}
            showPrintMargin={store.shouldShowPrintMargin}
            name="main-editor"
            onChange={store.updateInput}
            editorProps={{ $blockScrolling: true }}
            style={editorStyle}
          />
        </EditorContainer>
        <div>
          <Button
            variant="primary"
            onClick={() => console.log(store.currentInput)}
          >
            Log content
          </Button>
        </div>
      </AppContainer>
    );
  }
}

export default App;
