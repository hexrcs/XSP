import React from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/Button";

import store from "../store";

const SettingsContainer = styled.div`
  margin-top: 1.5rem;
  width: 48rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-left: 0.5rem;
`;

export default function Settings() {
  return (
    <SettingsContainer>
      <StyledButton
        variant="primary"
        size="sm"
        onClick={() => store.useSampleDatabase()}
      >
        Use Sample Database
      </StyledButton>
      <StyledButton
        variant="primary"
        size="sm"
        onClick={() => store.resetDatabase()}
      >
        Reset Database
      </StyledButton>
    </SettingsContainer>
  );
}
