import { observable, action, computed, isArrayLike } from "mobx";
import alasql from "alasql";

class Store {
  database = new alasql.Database("database");

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
  currentInput = `CREATE TABLE IF NOT EXISTS test (language INT, hello STRING);
INSERT INTO test VALUES (1,'Hello!');
INSERT INTO test VALUES (2,'Aloha!');
INSERT INTO test VALUES (3,'Bonjour!');
SELECT * FROM test WHERE language > 1;`;

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
  @observable
  message = "";

  @action
  updateInput = newInput => {
    this.currentInput = newInput;
  };

  @action
  run = async () => {
    this.message = "";
    this.error = "";
    try {
      this.result_ = await this.database.exec(this.currentInput);
    } catch (error) {
      if (error instanceof SyntaxError) {
        this.error =
          "Invalid syntax, please double check if you have misspellt anything!";
      } else if (error instanceof TypeError) {
        this.error =
          "Invalid query, please double check if you have missed anything!";
      } else {
        this.error = error.message;
        console.warn(error);
      }
    }
  };

  @action
  resetDatabase = () => {
    this.message = "";
    this.database = new alasql.Database("database");
    this.result_ = [];
    this.message = "Database is reset!";
  };

  @action
  useSampleDatabase = async () => {
    this.message = "Loading sample database...";
    this.database = new alasql.Database("database");
    await this.database.exec(
      'CREATE TABLE Album; SELECT * INTO Album FROM CSV("Album.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Artist; SELECT * INTO Artist FROM CSV("Artist.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Customer; SELECT * INTO Customer FROM CSV("Customer.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Employee; SELECT * INTO Employee FROM CSV("Employee.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Genre; SELECT * INTO Genre FROM CSV("Genre.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Invoice; SELECT * INTO Invoice FROM CSV("Invoice.csv");'
    );
    await this.database.exec(
      'CREATE TABLE InvoiceLine; SELECT * INTO InvoiceLine FROM CSV("InvoiceLine.csv");'
    );
    await this.database.exec(
      'CREATE TABLE MediaType; SELECT * INTO MediaType FROM CSV("MediaType.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Playlist; SELECT * INTO Playlist FROM CSV("Playlist.csv");'
    );
    await this.database.exec(
      'CREATE TABLE PlaylistTrack; SELECT * INTO PlaylistTrack FROM CSV("PlaylistTrack.csv");'
    );
    await this.database.exec(
      'CREATE TABLE Track; SELECT * INTO Track FROM CSV("Track.csv");'
    );

    this.currentInput = `SELECT Country, COUNT(*) AS CustomerCount
    FROM Customer 
    GROUP BY Country 
    ORDER BY CustomerCount DESC;`;

    this.message = "Sample database loaded!";
  };

  @action
  saveDatabase = () => {
    this.message = "";
    this.message = "Database saved!";
  };
}

const store = new Store();

export default store;
