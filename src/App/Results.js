import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import JsonTable from "ts-react-json-table";
import Alert from "react-bootstrap/lib/Alert";

import store from "../store";

const StyledTable = styled(JsonTable)`
  margin-top: 2rem;
  width: 45rem;
  align-self: stretch;

  .jsonOdd {
    background: #eee;
  }

  thead {
    /* text-align: center; */
    border-bottom: 1px solid #ddd;
  }
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45rem;
`;

@observer
class Results extends Component {
  render() {
    return (
      <>
        <TableContainer>
          <StyledTable rows={store.result} />
        </TableContainer>
        {store.error && <Alert variant='danger'>{store.error}</Alert>}
      </>
    );
  }
}

export default Results;