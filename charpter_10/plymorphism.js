function plumges(birds) {
    return Map(birds.map(b => [b.name, plumage(b)]))
};
function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}
function plumge(bird) {
    return createBird(bird).plumge;
};
function speed(bird) {
    return createBird(bird).spairSpeedVelocityeed;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumge() {
        return "unknown";
    }
    get airSpeedVelocity(){
        return null;
    }
}

function createBird(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        // ...
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }
    get airSpeedVelocity(){
        return 35;
    }
}
class AfricanSwallow extends Bird {    
    get plumage() {
        return (this.numberOfCononuts > 2) ? "tired" : "average";
    }
}
class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }   
}