const PriceCalculator = require('../src/components/PriceCalculator');

describe('Price Calculator Service', () => {
    describe('Calculate shipping fee', () => {
        it ('The shipping fee should be 20% of the base price for the item', () => {
            const calculator = new PriceCalculator(2000);
            expect(calculator.shippingFee()).toBe(400);
        });
    });
});