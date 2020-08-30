function rating(voyage, history) {
    const vpr = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpr * 3 > (vr + chr *2)) return "A";
    else return "B";
}

function voyageRisk(voyage){}
function captainHistoryRisk(voyage, history){}
function hasChinaHistroy(history) {}
function voyageProfitFactor(voyage, history){}

const voyage = {zone: "west-indies", lenght: 10};
const history = [
    {zpne: "east-indies", profit: 5},
    {zpne: "china",       profit: -2},
    // ...
]

const myRating = rating(voyage, history);

function rating(voyage, history) {
    return Rating(voyage, history).value;
}

class Rating {
    constructor(voyage, history) {
        this.voyage = voyage;
        this.history = history;
    }
    get value() {
        const vpr = this.voyageProfitFactor(voyage, history);
        const vr = this.voyageRisk(voyage);
        const chr = this.captainHistoryRisk(voyage, history);
        if (vpr * 3 > (vr + chr *2)) return "A";
        else return "B";
    }
    get voyageRisk() {

    }
    get captainHistoryRisk() {

    }
    get voyageProfitFactor() {

    }
    get hasChinaHistory() {

    }
}
