function alertForMiscreant (people) {
    if (findMiscreant(people) !== "") setOffAlart();
}

function findMiscreant (people) {
    for (const p of people) {
        if (p === "Don") {
            return "Don";
        }
    }
    return "";
}

// const find = alertForMiscreant(people);
find = findMiscreant(people)
alertForMiscreant(people);

// ruby
// setOffAlart() if findMiscreant(people) != ''
