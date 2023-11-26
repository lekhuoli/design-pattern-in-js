/**
 * HIGH-LEVE MODULE should not depends on LOW-LEVEL MODULE
 */
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

class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser")
      throw new Error("RelationshipBrowser is abstract!");
  }
  findAllChildrenOf(name) {}
}
//LOW-LEVEL MODULE string parent child rels
class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: RELATIONSHIP.parent,
      to: child,
    });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && r.type === RELATIONSHIP.parent)
      .map((r) => r.to);
  }
}

//HIGH-LEVEL MODULE
// Find relation shipe between the person
class Research {
  // constructor(relationships) {
  //   //find all children of John
  //   const relations = relationships.data;
  //   for (let rel of relations.filter(
  //     (r) => r.from.name === "John" && r.type === RELATIONSHIP.parent
  //   )) {
  //     console.log(`John  has child name ${rel.to.name}`);
  //   }
  // }

  constructor(browser) {
    for (let p of browser.findAllChildrenOf("John")) {
      console.log(`John has a child called ${p.name}`);
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
