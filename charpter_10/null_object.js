class Site {
    get customer() {
        return (this._customer === "unknow") ? new UnKnownCustomer() : this._customer;
    }
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
    get name() {return "occupant"}
    get billingPlan() {return registory.billingPlan.basic;}
    set billingPlan(arg) { /*何もしない */ }
    get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

function isUnkwnon(arg) {
    if (!((arg instanceof Customer) || (arg instanceof UnKnownCustomer)))
        throw new Error('未知な値について要調査: <${arg}>');
    return arg.isUnkwnon;
}

// client1
const customerName = aCustomer.name; // custoemrが何者であるかclient側で意識しなくてもよくなった

// client2
const plan = aCustomer.billingPlan;

// client3
aCustomer.billingPlan = newPlan

// client4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
