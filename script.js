class Animal {
   static isAlive = true;

    static eat(){
        console.log(`This ${this.name} Eats`)
    }

    static drink(){
        console.log(`This ${this.name} Drinks`)
    }
}

class Rabbit extends Animal {
    static name = "rabbit";
    static run(){
        console.log(`This ${this.name} is running`)
    }
}
class Cow extends Animal {
    static name = "Cow";
    static walk(){
        console.log(`This ${this.name} is walking`)
    }
}
class Hawk extends Animal {
    static name = "Hawk";
    static fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const cow = new Cow();
const hawk = new Hawk();

console.log(`is ${Rabbit.name} alive ${Rabbit.isAlive}`)
Rabbit.eat();
Rabbit.drink();
Rabbit.run();
Cow.eat();