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
