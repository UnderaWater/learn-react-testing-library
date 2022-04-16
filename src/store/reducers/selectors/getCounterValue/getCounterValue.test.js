import { getCounterValue } from './getCounterValue';

describe('get counter value', () => {
    test('test work with empty state', () => {
        expect(getCounterValue({})).toBe(0)
    });

    test('test work with filled state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
});