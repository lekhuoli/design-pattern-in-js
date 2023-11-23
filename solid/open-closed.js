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
