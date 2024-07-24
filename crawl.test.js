
import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";
import { getURLsFromHTML } from "./crawl.js";
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<!DOCTYPE html><body>
    
    <a href='https://blog.boot.dev/path'>Boot</a>
    <a href='https://blog.boot.dev/path/'>Path</a>
    <a href='https://google.com'>Path</a>
    <a href='https://youtube.com'>Path</a>
  
  </body>`);
console.log(dom.window.document.querySelector('a').textContent);
// console.log(dom.window.document.querySelector('a').textContent);
//const crawl = require('./crawl');
const bootURL = 'https://blog.boot.dev/path'
const baseURL = 'https://blog.boot.dev/path'

// test('check if url has a path called blog.boot.dev/path', () => {
//   normalizeURL(bootURL);
// });

test('check for html anchor tags and baseURL', () => {
  console.log("Printed absolute url")
  console.log(getURLsFromHTML(dom, baseURL));
});