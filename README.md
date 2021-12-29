# @meetsnowmaker/trycatcher

![npm (scoped)](https://img.shields.io/npm/v/@meetsnowmaker/trycatcher)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@meetsnowmaker/trycatcher)

Embrace failure in synchronous functions.

This is a work in progress.

## Introduction

Ever since I started learning functional programming and asynchronous functions in node, the old way of trying and catching errors felt off. To avoid making every function asynchronous just to be able to properly return the desired outcome to the const I defined, I made a simple hacky attempt to get a predetermined response from the tryable function.

It felt somewhat more convenient to define both outcomes with a single call. After a while I noticed this simple function has numerous copies in almost every project I worked on. I was thinking it might be a great opportunity to learn more about the npm packaging lifecycle, so here it is. My first dummy npm project.

## How to

```node
import { tryCatcher } from "@meetsnowmaker/trycatcher";

const [parsed, error] = tryCatcher(() => {});
```
