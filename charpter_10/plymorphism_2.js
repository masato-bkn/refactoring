function rating(voyage, history) {
    const vpr = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpr * 3 > (vr + chr *2)) return "A";
    else return "B";
}

function voyageRisk(voyage){}
function captainHistoryRisk(voyage, history){}
function hasChina(history) {}
function voyageProfitFactor(voyage, history){}

const voyage = {zone: "west-indies", lenght: 10};
const history = [
    {zpne: "east-indies", profit: 5},
    {zpne: "china",       profit: -2},
    // ...
]

const myRating = rating(voyage, history);