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

  @observable
  error = "";

  @action
  updateInput = newInput => {
    this.currentInput = newInput;
  };

  @action
  run = async () => {
    try {
      this.result_ = await alasql(this.currentInput);
      this.error = "";
    } catch (error) {
      if (error instanceof SyntaxError) {
        this.error =
          "Invalid syntax, please double check if you have misspellt anything!";
      } else if (error instanceof TypeError) {
        this.error =
          "Invalid query, please double check if you have missed anything!";
      } else {
        this.error =
          "Unexpected error, please check the browser console. Filing an issue on GitHub would be appreciated!";
        console.warn(error);
      }
    }
  };
}

const store = new Store();

export default store;
