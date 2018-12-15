import React from "react";
import styled from "@emotion/styled";
import Button from "react-bootstrap/lib/Button";

import store from "../store";

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45rem;
  align-self: stretch;
`;

export default function Controls() {
  return (
    <div>
      <ButtonsDiv>
        <Button variant="primary" onClick={() => store.run()}>
          Execute
        </Button>
      </ButtonsDiv>
    </div>
  );
}
