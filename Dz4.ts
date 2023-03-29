abstract class Car { 
    protected constructor(
        protected readonly Price: number,
        protected readonly MaxSpeed: number,
        protected readonly Color: string
      ) {}
    abstract Show(): void; 
}

class BMW extends Car{
    constructor(Price: number, MaxSpeed: number,Color:string){
    super(Price,MaxSpeed,Color);
    }
    Show(): void{
        console.log(`BMW : Price : ${this.Price} MaxSpeed : ${this.MaxSpeed} Color : ${this.Color}`);
    }
}

class Volkswagen extends Car{
    constructor(Price: number, MaxSpeed: number,Color:string){
        super(Price,MaxSpeed,Color);
    }
    Show(): void{
        console.log(`Volkswagen : Price : ${this.Price} MaxSpeed : ${this.MaxSpeed} Color : ${this.Color}`);
    }
}

class Mazda extends Car{
    constructor(Price: number, MaxSpeed: number,Color:string){
        super(Price,MaxSpeed,Color);
    }
    Show(): void{
        console.log(`Mazda : Price : ${this.Price} MaxSpeed : ${this.MaxSpeed} Color : ${this.Color}`);
    }
}


let vars : Car[] = [new Mazda(15000,230, "Black"), new Volkswagen(20000,195,"Blue"), new BMW(50000,545,"White")];
for(let num of vars)
console.log(num);




    