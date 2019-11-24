import React from "react";
import styled from "@emotion/styled";
import AceEditor from "react-ace";

import "brace/mode/sql";
import "brace/theme/github";
import "brace/ext/language_tools";

import store from "../store";

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

export default function Editor() {
  return (
    <EditorContainer>
      <AceEditor
        mode="sql"
        theme="github"
        defaultValue={store.currentInput}
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
  );
}
