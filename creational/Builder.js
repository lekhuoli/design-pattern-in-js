/** 
Creation patterns used to construct complex object step by step
It seprates the contruction of object from its represenation, allwing the same
contruction process to create different representation
This patterns is useful when an object has large number of parameters, 
and you want to provide a flexible way to contruct the object
*/

// Prodcuct
class Computer {
  constructor() {
    this.motherboard = null;
    this.processor = null;
    this.storage = null;
    this.memery = null;
  }

  display() {
    console.log(
      `Computer: ${this.motherboard}  ${this.processor} ${this.storage} ${this.memery}`
    );
  }
}

class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }

  buildMotherBoard(motherboard) {
    this.computer.motherboard = motherboard;
    return this;
  }

  buildProcessor(processor) {
    this.computer.processor = processor;
    return this;
  }

  buildStorage(storage) {
    this.computer.storage = storage;
    return this;
  }

  buildMemory(memery) {
    this.computer.memery = memery;
    return this;
  }

  getResult() {
    return this.computer;
  }
}

//Director  
class ComputerDirector {
  constructorGamingComputer(builder) {
    return builder
      .buildMotherBoard("Gaming Motherboard")
      .buildProcessor("Gaming Processor")
      .buildMemory("16GB")
      .buildStorage("1TB")
      .getResult();
  }

  constructOfficeComputer(builder) {
    return builder
      .buildMotherBoard("General Motherboard")
      .buildProcessor("General Processor")
      .buildMemory("8GB")
      .buildStorage("500GB")
      .getResult();
  }
}

//usage
const builder = new ComputerBuilder();
const director = new ComputerDirector();

const gamingComputer = director.constructorGamingComputer(builder);
gamingComputer.display();

const officeComputer = director.constructOfficeComputer(builder);
gamingComputer.display();




