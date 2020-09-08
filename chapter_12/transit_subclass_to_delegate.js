class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
}

class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, data);
        this.extras = extras;
    }
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback')
    }
}

function createBooking(show, data) {
    return new Booking(show, data);
}

function createPremiumBooking(show, data) {
    return new PremiumBooking(show, data, extras);
}

// Booking client
aBooking = createBooking(show, data)
// PremiumBooking client
aBooking = createPremiumBooking(show, data)
