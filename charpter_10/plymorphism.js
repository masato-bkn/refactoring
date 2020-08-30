function plumges(birds) {
    return Map(birds.map(b => [b.name, plumage(b)]))
};
function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}
function plumge(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return "average";
        case 'AfterSwallow':
            // ...
    }
};
function speed(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            // ...
    }
}