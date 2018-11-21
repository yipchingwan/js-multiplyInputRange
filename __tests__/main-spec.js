const printMultiplicationTable = require('../main');
//normal
it ('should multipy within input range with normal input range', () => {
    expect(printMultiplicationTable(2, 4)).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16\n');
});
// From bigger than To
it ('should return null when range From is bigger than To', () => {
    expect(printMultiplicationTable(4, 2)).toBe(null);
});
//From Equal To
it ('should return null when range From is bigger than To', () => {
    expect(printMultiplicationTable(4, 4)).toBe(null);
});
//From or To not within range between 1 and 1000
it ('should return null when range From less than 1', () => {
    expect(printMultiplicationTable(0, 2)).toBe(null);
});

it ('should return null when range From bigger than 1000', () => {
    expect(printMultiplicationTable(1001, 2)).toBe(null);
});


it ('should return null when range To bigger than 1000', () => {
    expect(printMultiplicationTable(2, 1001)).toBe(null);
});

it ('should return null when range From and To bigger than 1000', () => {
    expect(printMultiplicationTable(1001, 1003)).toBe(null);
});

it ('should return null when range From and To smaller than 1000', () => {
    expect(printMultiplicationTable(-1, 0)).toBe(null);
});
//From or To contain NULL
it ('should return null when From is NULL', () => {
    expect(printMultiplicationTable(2, null)).toBe(null);
});

it ('should return null when To is NULL', () => {
    expect(printMultiplicationTable(null, 4)).toBe(null);
});

it ('should return null when From and To are NULL', () => {
    expect(printMultiplicationTable(null, null)).toBe(null);
});

it ('should multipy within input range with large normal input range', () => {
    expect(printMultiplicationTable(2, 15)).toBe('2*2=4\n2*3=6    3*3=9\n2*4=8    3*4=12   4*4=16\n2*5=10   3*5=15   4*5=20   5*5=25\n2*6=12   3*6=18   4*6=24   5*6=30   6*6=36\n2*7=14   3*7=21   4*7=28   5*7=35   6*7=42   7*7=49\n2*8=16   3*8=24   4*8=32   5*8=40   6*8=48   7*8=56    8*8=64\n2*9=18   3*9=27   4*9=36   5*9=45   6*9=54   7*9=63    8*9=72    9*9=81\n2*10=20  3*10=30  4*10=40  5*10=50  6*10=60  7*10=70   8*10=80   9*10=90   10*10=100\n2*11=22  3*11=33  4*11=44  5*11=55  6*11=66  7*11=77   8*11=88   9*11=99   10*11=110  11*11=121\n2*12=24  3*12=36  4*12=48  5*12=60  6*12=72  7*12=84   8*12=96   9*12=108  10*12=120  11*12=132  12*12=144\n2*13=26  3*13=39  4*13=52  5*13=65  6*13=78  7*13=91   8*13=104  9*13=117  10*13=130  11*13=143  12*13=156  13*13=169\n2*14=28  3*14=42  4*14=56  5*14=70  6*14=84  7*14=98   8*14=112  9*14=126  10*14=140  11*14=154  12*14=168  13*14=182  14*14=196\n2*15=30  3*15=45  4*15=60  5*15=75  6*15=90  7*15=105  8*15=120  9*15=135  10*15=150  11*15=165  12*15=180  13*15=195  14*15=210  15*15=225\n');
});

