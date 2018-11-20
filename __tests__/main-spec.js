const multiplyInputRange = require('../main');
//normal
it ('should multipy within input range with normal input range', () => {
    expect(multiplyInputRange(2, 4)).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16\n');
});
// From bigger than To
it ('should return null when range From is bigger than To', () => {
    expect(multiplyInputRange(4, 2)).toBe(null);
});
//From or To not within range between 1 and 1000
it ('should return null when range From less than 1', () => {
    expect(multiplyInputRange(0, 2)).toBe(null);
});

it ('should return null when range From bigger than 1000', () => {
    expect(multiplyInputRange(1001, 2)).toBe(null);
});


it ('should return null when range To bigger than 1000', () => {
    expect(multiplyInputRange(2, 1001)).toBe(null);
});

it ('should return null when range From and To bigger than 1000', () => {
    expect(multiplyInputRange(1001, 1003)).toBe(null);
});

it ('should return null when range From and To smaller than 1000', () => {
    expect(multiplyInputRange(-1, 0)).toBe(null);
});
//From or To contain NULL
it ('should return null when From is NULL', () => {
    expect(multiplyInputRange(2, null)).toBe(null);
});

it ('should return null when To is NULL', () => {
    expect(multiplyInputRange(null, 4)).toBe(null);
});

it ('should return null when From and To are NULL', () => {
    expect(multiplyInputRange(null, null)).toBe(null);
});

