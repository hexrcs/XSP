import React from "react";
import styled from "@emotion/styled";
import AceEditor from "react-ace";

import "brace/mode/sql";
import "brace/theme/github";
import "brace/ext/language_tools";

import store from "../store";
import { observer } from "mobx-react";

const editorStyle = {
  width: "49rem",
  height: "16rem",
  fontSize: "1rem",
  margin: "0.5rem",
};

const EditorContainer = styled.div`
  border-color: #000;
  border-width: 2px;
  border-style: solid;
  margin: 1rem;
`;

@observer
class Editor extends React.Component {
  render() {
    return (
      <EditorContainer>
        <AceEditor
          mode="sql"
          theme="github"
          enableLiveAutocompletion={store.isAutocompleteEnabled}
          wrapEnabled={store.isWrapEnabled}
          showGutter={store.shouldShowGutter}
          showPrintMargin={store.shouldShowPrintMargin}
          name="main-editor"
          value={store.currentInput}
          onChange={store.updateInput}
          editorProps={{ $blockScrolling: true }}
          style={editorStyle}
        />
      </EditorContainer>
    );
  }
}

export default Editor;
