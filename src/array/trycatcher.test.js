import { test, expect } from '@jest/globals';

import { tryCatcher } from './trycatcher';

test('should return parsed array', () => {
  const parseAbleJson = '["test","words"]';

  const [parsed, error] = tryCatcher(() => JSON.parse(parseAbleJson));

  expect(error).toBeNull();
  expect(parsed).toStrictEqual(['test', 'words']);
});

test('should return stringified Json', () => {
  const parseAbleArray = ['test', 'words'];

  const [parsed, error] = tryCatcher(() => JSON.stringify(parseAbleArray));

  expect(error).toBeNull();
  expect(parsed).toBe('["test","words"]');
});

test('should fail to parse malformed json array', () => {
  const parseAbleJson = `["test",'words"]`;

  const [parsed, error] = tryCatcher(() => JSON.parse(parseAbleJson));

  expect(parsed).toBeNull();

  expect(error.name).toBe('SyntaxError');
  expect(error.message).toBe(`Unexpected token ' in JSON at position 8`);
  // cant really test the stack
  expect(error.stack).toBeTruthy();
  // maybe like this
  const stackArray = error.stack.split('\n');
  expect(stackArray[0]).toBe(
    `SyntaxError: Unexpected token ' in JSON at position 8`
  );
  // should trim maybe
  expect(stackArray[1]).toBe('    at JSON.parse (<anonymous>)');
});
