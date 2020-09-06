class Employee {
    constructor (name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;        
    }
    validateType(arg) {}
    get typeString() { return this._type.toString();}
    get type() { return this._type}
    set type(arg) { this._type = EmployeeType.createEmployeeType(arg);}
    get capitalizedType() {}
    toString() {}
    // ...
}

class EmployeeType {
    toString() { return this._value; }
    static createEmployeeType(aString) {
        switch(aString) {
            case "enginner" : return new Enginner();
            // ...
        }
    }
}

class Engineer extends EmployeeType {
}
class Manager extends EmployeeType {
}
class Salesman extends EmployeeType {
}
