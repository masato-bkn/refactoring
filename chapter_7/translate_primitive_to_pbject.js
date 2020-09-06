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
    toString() {return this._value;}
}

// client
hightPriorityCount = orders.filter(
    // これをオブジェクトで表現したい
    o => "high" === o.priority.toString() || "rush" === o.priority.toString()
    )
