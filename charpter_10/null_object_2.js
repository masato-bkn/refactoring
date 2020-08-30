// オブジェクトリテラルの利用

class Site {
    get customer() {return this._customer;}
}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {return false;}
}

function createKnownCustomer() {
    return {
        isUnknown: true,
    };
}

function isUnKnown(arg) {
    return (arg === "unknown");
}

// client1
const aCustomer = site.customer;
// ...
let customerName;
if (isUnKnown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// client2
const plan = isUnKnown(aCustomer) ?
    registory.billingPlans.basic
    : aCustomer.billingPlan;

// client3
const weeksDelinquent = isUnKnown(aCustomer) ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
