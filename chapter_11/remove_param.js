class Order {
    get finalPrice() {
        const baseprice = this.quantity * this.itemPrise;
        return this.discountPrice(baseprice);
    }
    discountPrice(baseprice) {
        switch (this.discountLevel) {
            // ...
        }
    }
    get discountLevel() {
        return this.quantity > 100 ? 2 : 1
    }
}