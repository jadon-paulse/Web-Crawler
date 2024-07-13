
import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

//const crawl = require('./crawl');
const bootURL = 'https://blog.boot.dev/path'

test('check is url has a path called blog.boot.dev/path', () => {
  normalizeURL(bootURL);
});