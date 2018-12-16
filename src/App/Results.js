import React, { Component } from "react";
import { observer } from "mobx-react";
import JsonTable from "ts-react-json-table";

import store from "../store";

@observer
class Results extends Component {
  render() {
    return (
      <div>
        <JsonTable rows={store.result} />
      </div>
    );
  }
}

export default Results;
