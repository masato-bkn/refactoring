class Order {
    constructor(data) {
        this.priority = data.priority;
        // ...
    }
}

// client
hightPriorityCount = orders.filter(
    // これをオブジェクトで表現したい
    o => "high" === o.priority || "rush" === o.priority
    )
