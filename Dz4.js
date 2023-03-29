"use strict";
class Car {
    constructor(Price, MaxSpeed, Color) {
        this.Price = Price;
        this.MaxSpeed = MaxSpeed;
        this.Color = Color;
    }
}
class BMW extends Car {
    constructor(Price, MaxSpeed, Color) {
        super(Price, MaxSpeed, Color);
    }
    Show() {
        console.log(`BMW : Price : ${this.Price} MaxSpeed : ${this.MaxSpeed} Color : ${this.Color}`);
    }
}
class Volkswagen extends Car {
    constructor(Price, MaxSpeed, Color) {
        super(Price, MaxSpeed, Color);
    }
    Show() {
        console.log(`Volkswagen : Price : ${this.Price} MaxSpeed : ${this.MaxSpeed} Color : ${this.Color}`);
    }
}
class Mazda extends Car {
    constructor(Price, MaxSpeed, Color) {
        super(Price, MaxSpeed, Color);
    }
    Show() {
        console.log(`Mazda : Price : ${this.Price} MaxSpeed : ${this.MaxSpeed} Color : ${this.Color}`);
    }
}
let vars = [new Mazda(15000, 230, "Black"), new Volkswagen(20000, 195, "Blue"), new BMW(50000, 545, "White")];
for (let num of vars)
    console.log(num);
