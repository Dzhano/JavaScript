class Storage{
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
    }
    /* totalCost = Object.entries(this.storage).forEach((p, v) => {
        let cost = 0;
        cost += this.storage[v].price + this.storage[v].quantity;
        return cost;
    }); */ // Not sure how exactly to fix this.
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }
    getProducts() {
        let result = "";
        Object.entries(this.storage).forEach((p, v) => result += JSON.stringify(this.storage[v]) + "\n")
        return result;
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
// console.log(storage.totalCost);