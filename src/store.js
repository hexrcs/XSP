import { observable, action } from "mobx";

class Store {
  // control
  @observable
  isWrapEnabled = false;
  @observable
  isAutocompleteEnabled = true;
  @observable
  shouldShowGutter = false;

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
