/**
 * Objects of superclass should be replaced with objects of subclass 
   without affecting the correctness of the program
 */
// class Bird {
//   fly() {
//     console.log(`I can fly`);
//   }
// }

// class Duck extends Bird {
//   quack() {
//     console.log("I can quack");
//   }

//   fly() {
//     throw new Error("cann't fly");
//   }
// }

// class Penguin extends Bird {
//   swim() {
//     console.log(`I can swim`);
//   }
// }

// function makeBirdFly(bird) {
//   bird.fly();
// }

// const duck = new Duck();
// const penguin = new Penguin();

// makeBirdFly(duck);
// makeBirdFly(penguin);

/**
On this above program it contradicts the liskov substitution principle when we try to implement
makeBirdFly with duck becasue it try to remove the exiting functaonality of base class

To resolve this issue make sepeate base classes for swim and fly birds
*/

class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
