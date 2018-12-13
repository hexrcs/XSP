import React, { Component } from "react";
import { observable } from "mobx";
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

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45rem;
  align-self: stretch;
`;

@observer
class App extends Component {
  render() {
    console.log("rerendered");
    return (
      <AppContainer>
        <Logo />
        <div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => console.log("Use sample DB")}
          >
            Use Sample Database
          </Button>
        </div>
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
          <ButtonsDiv>
            <Button variant="primary" onClick={() => store.run()}>
              Execute
            </Button>
          </ButtonsDiv>
        </div>
        {/* React rerenders everything here, weird */}
        {/* <div>{JSON.stringify(store.result)}</div> */}
      </AppContainer>
    );
  }
}

export default App;
