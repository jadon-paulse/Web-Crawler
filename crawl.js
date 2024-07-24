import { JSDOM } from 'jsdom'

// URL normalization still a work in progress
function normalizeURL(url) {
    //const baseURL = 'blog.boot.dev/path'
    //let fullPath = `${url.host}${url.pathname}`
    let testUrl =
        new URL(url);
          
    if (testUrl.pathname.includes('/path')) {
        console.log("This passed bruh")
        testUrl = 'blog.boot.dev/path'
        console.log(testUrl)
        
    } else {
        console.log(testUrl.hostname)
        console.log(baseURL.pathname)
    }


    // let fullPath = `${testUrl.host}${testUrl.pathname}`

    // if (fullPath.slice(-1) === '/') {
    //     console.log(fullPath)
    //     fullPath = fullPath.slice(0, -1)
    //     console.log(fullPath)
    // }
    //console.log(fullPath.slice(-1))
    // console.log(testUrl.host)
    // console.log(testUrl.pathname)
}

function getURLsFromHTML(htmlBody, baseURL) {
    // const data = Array.prototype.slice.call(htmlBody).map(anchorTag => {
    //     return anchorTag.textContent;
    // })
    // htmlBody.forEach(function (value) {
    //     console.log(value.href)
    // })
    const urls = []
    const dom = new JSDOM(htmlBody)
    const anchors = dom.window.document.querySelectorAll('a')

    for (const anchor of anchors) {
        if (anchors.hasAttribute('href')) {
            let href = anchor.getAttribute('href')

            try {
                href = new URL(href, baseURL).href
                urls.push(href)
            } catch (err) {
                console.log(`${err.message}: ${href}`)
            }
        }
    }
    return urls
}

export { normalizeURL, getURLsFromHTML };