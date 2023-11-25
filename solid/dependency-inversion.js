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

//HIGH-LEVEL MODULE
// Find relation shipe between the person
class Research {
  constructor(relationships) {
    //find all children of John
    const relations = relationships.data;
    for (let rel of relations.filter(
      (r) => r.from.name === "John" && r.type === RELATIONSHIP.parent
    )) {
      console.log(`John  has child name ${rel.to.name}`);
    }
  }
}
const parent = new Person("John");
const child1 = new Person("Chris");
const child2 = new Person("Matt");

const rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);


// On the above  Reserach HIGH-LEVEL MODULE is dependent on Relationships LOW-LEVEL MODULE
//which violates the Dependency Inversion Principle 
// to reolsve this