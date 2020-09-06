class Order {
    constructor(data) {
        this.priority = data.priority;
        // ...
    }
    get priority() { return this._priority; }
    set priority(aString) { this._priority = aString; }
}

// client
hightPriorityCount = orders.filter(
    // これをオブジェクトで表現したい
    o => "high" === o.priority || "rush" === o.priority
    )
