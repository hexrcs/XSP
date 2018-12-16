import { observable, action, computed, isArrayLike } from "mobx";
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
  result_ = [];
  @computed
  get result() {
    if (!isArrayLike(this.result_) || !this.result_.slice(-1)[0]) {
      return [];
    } else if (!isArrayLike(this.result_.slice(-1)[0])) {
      return this.result_;
    } else return this.result_.slice(-1)[0];
  }

  @observable
  data = [];

  @action
  updateInput = newInput => {
    this.currentInput = newInput;
  };

  @action
  run = async () => {
    this.result_ = await alasql(this.currentInput);
  };
}

const store = new Store();

export default store;
