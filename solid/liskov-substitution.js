/**
 * Objects of superclass should be replaced with objects of subclass 
   without affecting the correctness of the program
 */
class Bird {
  fly() {
    console.log(`I can fly`);
  }
}

class Duck extends Bird {
  quack() {
    console.log("I can quack");
  }

  fly() {
    throw new Error("cann't fly");
  }
}

class Penguin extends Bird {
  swim() {
    console.log(`I can swim`);
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);

/**
on this above program it contradicts the liskov substitution principle when we try to implement
makeBirdFly with duck
*/
