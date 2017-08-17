chrome.runtime.onMessage.addListener((message, sender, response) => {
    document.querySelectorAll('img').forEach((x) => {
        x.src = chrome.runtime.getURL('wow.jpg');
    });
    console.log("hi.")
 });

