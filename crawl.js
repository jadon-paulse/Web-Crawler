// URL normalization still a work in progress
function normalizeURL(url) {
    const baseURL = 'blog.boot.dev/path'
    const testUrl =
        new URL(url);
    
        
    if (testUrl.pathname.includes('/path')) {
        console.log("This passed bruh")
    } else {
        console.log(testUrl.hostname)
        console.log(baseURL.pathname)
    }
}

export { normalizeURL };