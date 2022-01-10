import { tryCatcher } from '../src/index';

const shouldWork = JSON.stringify(['asd', 'kek']);
const shouldFail = '["asd",kek]';

const [parsed, error] = tryCatcher(() => JSON.parse(shouldWork));

if (error) {
  throw error;
}

// eslint-disable-next-line no-console
console.log('parsed', parsed);

const [maybeParsed, definitellyError] = tryCatcher(() =>
  JSON.parse(shouldFail)
);

if (definitellyError) {
  throw definitellyError;
}

// eslint-disable-next-line no-console
console.log('maybeParsed', maybeParsed);
