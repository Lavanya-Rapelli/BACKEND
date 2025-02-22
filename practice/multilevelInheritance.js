// Multi-Level Inheritance occurs when a class inherits from another class, which is already inherited from another class.


class GrandParent {
    constructor() {
        console.log("Grandparent Constructor");
    }

    greet() {
        console.log("Hello from Grandparent");
    }
}

class Parent extends GrandParent {
    constructor() {
        super();
        console.log("Parent Constructor");
    }
}

class Child extends Parent {
    constructor() {
        super();
        console.log("Child Constructor");
    }
}

const obj = new Child();
obj.greet(); // Inherited from GrandParent
