// オブジェクトリテラルの利用

class Site {
    get customer() {
        return (this._customer === "unknow") ? createUnKnownCustomer() : this._customer;
    }
}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {return false;}
}

function createUnKnownCustomer() {
    return {
        isUnknown: true,
        name: "occupant",
        billingPlan: registory.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
    };
}

function isUnKnown(arg) {
    return arg.isUnKnown;
}

// client1
const aCustomer = site.customer;
// ...
let customerName = aCustomer.name;

// client2
const plan = aCustomer.billingPlan

// client3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
