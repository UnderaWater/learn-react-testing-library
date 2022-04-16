import counterReduce, { decrement, increment } from "../counterReduce";

describe('get counter reducer', () => {
    test('increment', () => {
        expect(counterReduce({
            value: 0,
        },
            increment()
        )).toEqual({ value: 1 });
    });

    test('decrement', () => {
        expect(counterReduce({
            value: 0,
        },
            decrement()
        )).toEqual({ value: -1 });
    });

    test('with empty state', () => {
        expect(counterReduce(undefined, decrement())).toEqual({ value: -1 });
        expect(counterReduce(undefined, increment())).toEqual({ value: 1 });
    });
});