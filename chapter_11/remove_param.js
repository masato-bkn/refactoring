class Order {
    get finalPrice() {
        const baseprice = this.quantity * this.itemPrise;
        let discountLevel;
        if (this.quantity > 100) discountLevel = 2;
        else discountLevel = 1;
        return this.discountPrice(baseprice, discountLevel);
    }
    discountPrice(baseprice, discountLevel) {
        switch (discountLevel) {
            // ...
        }
    }
}