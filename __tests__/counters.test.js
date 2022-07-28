import counters from '../src/modules/counters';

test('should return correct number of cards', () => {
  expect(counters.length + 1).toBeLessThanOrEqual(6);
});