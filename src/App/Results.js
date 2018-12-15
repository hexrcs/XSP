import React, { Component } from "react";
import { observer } from "mobx-react";

import store from "../store";

@observer
class Results extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(store.result)}</pre>
      </div>
    );
  }
}

export default Results;
