# @meetsnowmaker/trycatcher

![npm (scoped)](https://img.shields.io/npm/v/@meetsnowmaker/trycatcher)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@meetsnowmaker/trycatcher)

Embrace failure in synchronous functions.

This is a work in progress.

## Introduction

Ever since I started learning functional programming and asynchronous functions in node, the old way of trying and catching errors felt off. To avoid making every function asynchronous just to be able to properly return the desired outcome to the const I defined, I made a simple hacky attempt to get a predetermined response from the tryable function.

As I naturally progressed to urge for maximum immutability, it felt somewhat more convenient to define both outcomes with a single call. After a while I noticed this simple function had numerous copies in almost every project I worked on. I was thinking it might be a great opportunity to learn more about the npm packaging lifecycle, so here it is. My first dummy npm project. Bye `let` you might be missed.

## How to

The default version returns with an array where index 0 is always either `null` or the desired outcome, and index 1 is `null` or the caught `error`. When defining you can destruct the array and get properly named variables for the predetermined indexes.

```node
import { tryCatcher } from "@meetsnowmaker/trycatcher";

const shouldWork = JSON.stringify(["asd", "kek"]);
const shouldFail = '["asd",kek]';

const [parsed, error] = tryCatcher(() => JSON.parse(shouldWork));

if (error) {
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
```

will yield

```
parsed [ 'asd', 'kek' ]
C:\...\example.js:42
  throw definitellyError;
  ^

SyntaxError: Unexpected token k in JSON at position 7
    at JSON.parse (<anonymous>)
```

## Roadmap

Eventually I should implement proper type support and more variables of the base function.

Things I want to add in the future:

- typescript
- object like return with undefined instead of null, so one can inject default value when destructuring
- webpack for minifying
- eslint and prettier developer configurations
