class Site {
    get customer() {return this._customer;}

}

class Customer {
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}

    get isUnkwnon() {return true;}
}

class UnKnownCustomer {
    get isUnkwnon() {return true;}
}

function isUnkwnon(arg) {
    if (!((arg instanceof Customer) || (arg === "unknown")))
        throw new Error('未知な値について要調査: <${arg}>');
    return (arg === "unknown");
}

// client1
const aCustomer = site.customer;
// ...
let customerName;
if (isUnkwnon(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

// client2
const plan = (isUnkwnon(aCustomer)) ?
    registory.billingPlans.basic
    : aCustomer.billingPlan;

// client3
if (!isUnkwnon(aCustomer)) aCustomer.billingPlan = newPlan

// client4
const weeksDelinquent = (isUnkwnon(aCustomer)) ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// 特殊ケース判定後の処理が広範囲に渡っている時は、特殊ケース用オブジェクトの出番
