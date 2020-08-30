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

// client1
const aCustomer = site.customer;
// ...
let customerName;
if (aCustomer === "unKnown") customerName = "occupant";
else customerName = aCustomer.name;

// client2
const plan = (aCustomer === "unknown") ?
    registory.billingPlans.basic
    : aCustomer.billingPlan;

// client3
if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan

// client4
const weeksDelinquent = (aCustomer === "unknown") ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

// 特殊ケース判定後の処理が広範囲に渡っている時は、特殊ケース用オブジェクトの出番
