const app = require('./changes-with-coins')

test('Amount=5; Ways=4', () => {

    let coins = [1, 2, 5];
    let amount = 5;
    expect(app.change(amount, coins)).toBe(4)
})