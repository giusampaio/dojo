const app = require('./companies-arrive')

test('arrival=[1, 3, 3, 5, 7]; duration=[2, 2, 1, 2,, 1]', () => {

    let arrival = [1, 3, 3, 5, 7];
    let duration = [2, 2, 1, 2,, 1]
    
    expect(app.max_events(arrival, duration)).toBe(4)
})

test('arrival[1, 3, 5]; duration=[2, 2, 2]', () => {

    let arrival = [1, 3, 5];
    let duration = [2, 2, 2]
    
    expect(app.max_events(arrival, duration)).toBe(3)
})

test('arrival[1, 3, 5]; duration=[2, 2, 2]', () => {

    let arrival = [3, 1, 5, 2, 9]
    let duration = [5, 2, 1, 2, 3]
    
    expect(app.max_events(arrival, duration)).toBe(2)
})

