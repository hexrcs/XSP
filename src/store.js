import { observable, action } from "mobx";
import alasql from "alasql";

class Store {
  // GUI control
  @observable
  isWrapEnabled = false;
  @observable
  isAutocompleteEnabled = true;
  @observable
  shouldShowGutter = false;
  //maybe not allow user to show print margin at all, meaningless in a light editor
  @observable
  shouldShowPrintMargin = false;

  @observable
  isUsingSampleDB = false;

  // core editor functions
  @observable
  currentInput = "";

  @observable
  result = {};

  @observable
  data = [];

  @action
  updateInput = newInput => {
    this.currentInput = newInput;
  };

  @action
  run = async () => {
    this.result = await alasql(this.currentInput);
  };
}

const store = new Store();

export default store;
