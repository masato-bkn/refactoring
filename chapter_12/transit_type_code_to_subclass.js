class Employee {
    constructor (name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;        
    }
    validateType(arg) {}
    get type() { return this._type}
    set type(arg) { this._type = arg;}
    get capitalizedType() {}
    toString() {}
    // ...
}

class employeeType {
    constructor (aString) {
        this._value = aString
    }
    toString() { return this._value; }
}
