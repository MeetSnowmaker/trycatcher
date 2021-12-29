import { tryCatcher } from "../index";

const shouldWork = JSON.stringify(["asd", "kek"]);
const shouldFail = '["asd",kek]';

const [parsed, error] = tryCatcher(() => JSON.parse(shouldWork));

if (error) {
  console.log("error", error);
  throw error;
}

console.log("parsed", parsed);

const [maybeParsed, definitellyError] = tryCatcher(() =>
  JSON.parse(shouldFail)
);

if (definitellyError) {
  throw definitellyError;
}

console.log("maybeParsed", maybeParsed);
