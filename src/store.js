import { observable, action } from "mobx";

class Store {
  // GUI control
  @observable
  isWrapEnabled = false;
  @observable
  isAutocompleteEnabled = true;
  @observable
  shouldShowGutter = false;
  @observable
  shouldShowPrintMargin = false;

  // core functions
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
  run = () => {};
}

const store = new Store();

export default store;
