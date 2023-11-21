/* Class should have single responsibility
bad idea to to add more than one responsibility to single class 
*/
const fs = require("fs");
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  /* bad idea to save this journalfeatures on Journal class as it againt the Single Responsibility Principle
    instead make another class PersistanceManager to save journal as file

    save(fileName){
        fs.writeFileSync(fileName,this.toString())
    }

    load(fileName){
        //
    }

    loadFromURL(url){
        //
    }

    */
}

// save this journal on local file system
class PersistanceManager {
  preprocessor(j) {}

  saveToFile(fileName, journal) {
    fs.writeFileSync(fileName, journal.toString());
    console.log("journal saved");
  }

  appendSystemGenText(fileName, content) {
    fs.appendFile(fileName, content, function (err) {
      if (err) throw err;
      console.log("content appended");
    });
  }
}

Journal.count = 0;
let j = new Journal();
j.addEntry("I cried today.");
j.addEntry("I ate a bug.");
console.log(j.toString());

let p = new PersistanceManager();
console.log(__dirname);
let filename = `${__dirname}/single-responsibility.txt`; // linux filepath, replace fm-pc-lt-217 with your user
p.appendSystemGenText(
  filename,
  "/* This file is generated from PersistanceManager */"
);
p.saveToFile(filename, j);
