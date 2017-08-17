chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {message: "fix internet pls"}, (res) => {});
    });
});