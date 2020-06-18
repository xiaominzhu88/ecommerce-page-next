import { cartReduce } from '../components/Nav';

test('cartSum should return []', () => {
  const defaultValue = [];
  const result = cartReduce('return ', defaultValue);
  expect(result).toBe([]);
});
