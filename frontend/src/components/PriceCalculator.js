
class PriceCalculator {
    constructor(basePrice) {
        this.basePrice = basePrice;
    }

    getTotal() {
        return this.basePrice + this.shippingFee();
    }

    shippingFee() {
        return this.basePrice * (20 / 100);
    }
}
export default PriceCalculator