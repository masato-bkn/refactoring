function plumges(birds) {
    return Map(birds.map(b => [b.name, plumage(b)]))
};
function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}
function plumge(bird) {
    return Bird(bird).plumge;
};
function speed(bird) {
    return Bird(bird).spairSpeedVelocityeed;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumge() {
        switch (this.type) {
            case 'EuropeanSwallow':
                return "average";
            // ...
        }
    }
    get airSpeedVelocity(){
        switch (this.type) {
            case 'EuropeanSwallow':
                return 35;
            // ...
        }
    }
}

class EuropeanSwallow extends Bird {

}
class AfricanSwallow extends Bird {
    
}
class NorwegianBlueParrot extends Bird {
    
}