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
    
}

export { normalizeURL };