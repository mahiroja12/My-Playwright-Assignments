
let browser = "Chrome";

function displayBrowser(name) {
    console.log("Callback received:", name);
}

function checkBrowserVersion(callback)
{
    setTimeout(() => {
        callback(browser);
    }, 2000);
    console.log("The browser is", browser);
}
checkBrowserVersion(displayBrowser);