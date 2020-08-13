function statement(invoice, plays) {

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0
        switch (playFor(aPerformance).type) {
            case "tragedy":
                    result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                    result += 3000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 50 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`unkown type: ${playFor(aPerformance).type}`);
        }
        return result;
    } 

    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.Numberformat("en-US",
        {
            style: "currency", currency: "USD",
            minimumFractionDigits: 2
        }).format;

    for (let perf of invoice.performances) {
        let thisAmount = amountFor(perf);

        // ボリューム特典のポイントを加算
        volumeCredits += Math.max(perf.audience - 30, 0);
        // 喜劇の時は10人につき、さらにポイントを加算
        if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);
        // 注文の内訳を出力
        result +=  `${playFor(perf).name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;

        totalAmount += thisAmount;
    }

    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}