/* Open for extension but closed for modification */

const COLORS = Object.freeze({
  green: "green",
  red: "red",
  blue: "blue",
});

const SIZE = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter((p) => p.size === size && p.color === color);
  }
}

let apple = new Product("Apple", COLORS.green, SIZE.small);
let tree = new Product("Tree", COLORS.green, SIZE.large);
let house = new Product("House", COLORS.blue, SIZE.large);

let products = [apple, tree, house]; // array of obj

const pf = new ProductFilter();
console.log("Green product (old):\n");
const greenProducts = pf.filterByColor(products, COLORS.green);
for (let p of greenProducts) {
  console.log(`${p.name} is green`);
}
const smallProducts = pf.filterBySize(products, SIZE.small);
for (let p of smallProducts) {
  console.log(`${p.name} is small`);
}
const smallGreenProducts = pf.filterBySizeAndColor(
  products,
  SIZE.small,
  COLORS.green
);
for (let p of smallGreenProducts) {
  console.log(`${p.name} is small and green`);
}

/*  
what if you wanted add the filter filerBySizeOrColor with addition of other properties 
we have write multiple methods like filterBySizeAndColor this leads to redundant work

Better approach 
*/
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isStatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isStatisfied(item) {
    return this.size === item.size;
  }
}

class AndSpecificatin {
  constructor(...specs) {
    this.specs = specs;
  }
  isStatisfied(item) {
    return this.specs.every((x) => x.isStatisfied(item));
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter((x) => spec.isStatisfied(x));
  }
}

let bf = new BetterFilter();

console.log(`\nGreen products (new):\n`);
let cs = new ColorSpecification(COLORS.green);
for (let p of bf.filter(products, cs)) {
  console.log(`${p.name} is green`);
}

let ls = new SizeSpecification(SIZE.large);
for (let p of bf.filter(products, ls)) {
  console.log(`${p.name} is large`);
}

let lgs = new AndSpecificatin(cs, ls);
for (let p of bf.filter(products, lgs)) {
  console.log(`${p.name} is green and large`);
}
