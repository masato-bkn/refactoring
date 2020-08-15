class PerformanceCalculator {
    constructor(aPerformance, aplay) {
        this.performance = aPerformance;
        this.play = aplay;
    }
    get amount() {
        let result = 0
        switch (this.play.type) {
            case "tragedy":
                    result = 40000;
                if (this.Performance.audience > 30) {
                    result += 1000 * (this.Performance.audience - 30);
                }
                break;
            case "comedy":
                    result += 3000;
                if (this.Performance.audience > 20) {
                    result += 10000 + 50 * (this.Performance.audience - 20);
                }
                result += 300 * this.Performance.audience;
                break;
            default:
                throw new Error(`unkown type: ${this.play.type}`);
        }
        return result;
    }
}

export default function createStatementData(invoice, plays){
    // ファクトリ関数
    function createPerformanceCalcular(aPerformance, aPlay) {
        return new PerformanceCalculator(aPerformance, aPlay);
    }

    const statementData = {};
    statementData.customer = invoice.customer
    statementData.performances = invoice.performances.map(enrichPerformance)
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return statementData

    function enrichPerformance(aPerformance) {
        const calculator = createPerformanceCalcular(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = volumeCreditsFor(result);
        result.totalAmount = totalAmount(result)
        result.totalVolumeCredits = totalVolumeCredits(result)
        return result;
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    // 直接コンストラクタに渡すでは駄目なのか??
    // -> ここがポリモフィズム化の発端になったロジックなので、ポリモフィズムできるように基底くらずに移設した
    // ★ テストが通るか確認するために一時的に残す
    // function amountFor(aPerformance) {
    //     // value-objectパターンかな??
    //     return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
    // }
    function volumeCreditsFor(aPerformance) {
        let result = 0; 
        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === aPerformance.play.type) volumeCredits += Math.floor(aPerformance.audience / 5);
        return result;
    }
    function totalAmount(data) {
        return data.performances.
            reduce((total, p) => total + p.amount, 0);
    }
    function totalVolumeCredits(data) {
        return data.performances.
            reduce((total, p) => total + p.volumeCredits, 0);
    }
}