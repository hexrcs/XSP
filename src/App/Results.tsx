import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import JsonTable from "ts-react-json-table";
import Alert from "react-bootstrap/Alert";

import store from "../store";

const StyledTable = styled(JsonTable)`
  margin-top: 0.5rem;
  width: 45rem;
  align-self: stretch;

  .jsonOdd {
    background: #eee;
  }

  th {
    padding: 0.5rem 1rem;
  }

  td {
    padding: 0.5rem 1rem;
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

const AlertContainer = styled.div`
  margin: 1rem;
  height: 4rem;
`;

@observer
class Results extends Component {
  render() {
    return (
      <>
        <AlertContainer>
          {store.error && <Alert variant="danger">{store.error}</Alert>}
          {store.message && <Alert variant="primary">{store.message}</Alert>}
        </AlertContainer>
        <TableContainer>
          <StyledTable rows={store.result} />
        </TableContainer>
      </>
    );
  }
}

export default Results;
