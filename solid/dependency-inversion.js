const RELATIONSHIP = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

//LOW-LEVEL MODULE string parent child rels
class Relationships {
  constructor() {
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: RELATIONSHIP.parent,
      to: child,
    });
  }
}


const parent = new Person("John");
const child1 = new Person("Chris");
const child2 = new Person("Matt");

const rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

