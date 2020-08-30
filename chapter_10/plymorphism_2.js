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

class ExperiencedChinaRating extends Rating {

}

function rating(voyage, history) {
    return createRating(voyage, history).value;
}

function createRating(voyage, history) {
    if  (/*china???*/) {
        return ExperiencedChinaRating(voyage, history)
    }
    else {
        return new Rating(voyage, history)
    }
}

const voyage = {zone: "west-indies", lenght: 10};
const history = [
    {zpne: "east-indies", profit: 5},
    {zpne: "china",       profit: -2},
    // ...
]
const myRating = rating(voyage, history);
