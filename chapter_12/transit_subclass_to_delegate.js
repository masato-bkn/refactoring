class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }
    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
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

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }
}

function createBooking(show, data) {
    return new Booking(show, data);
}

function createPremiumBooking(show, data) {
    const result = new PremiumBooking(show, data, extras);
    result._bePremium(extras);
    return result;
}


// Booking client
aBooking = createBooking(show, data)
// PremiumBooking client
aBooking = createPremiumBooking(show, data)
