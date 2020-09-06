class Order {
    constructor(data) {
        this.priority = data.priority;
        // ...
    }
    get priority() {return this._priority;}
    get priorityString() { return this._priority.toString(); }
    set priority(aString) { this._priority = new Priority(aString); }
}

class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        this._value = value;
    }
    get _index() { return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {return ["low", 'normal', 'high', 'rush']}

    toString() {return this._value;}
    higherThan(otger) {return this._index > other._index;}
}

// client
hightPriorityCount = orders.filter(
    o => o.priority.higherThan(new Priority("normal"))
    );
