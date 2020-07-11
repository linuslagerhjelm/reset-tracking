const button = document.getElementById("reset-button");

if (button) {
  button.addEventListener("click", () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      const url = tabs[0]?.url;
      if (url) {
        clearData(url);
      }
    });
  });
};

const reload = () => {
  chrome.tabs.reload();
}

const clearData = url => {
  chrome.browsingData.remove({
    "origins": [url]
  }, {
    "cacheStorage": true,
    "cookies": true,
    "fileSystems": true,
    "indexedDB": true,
    "localStorage": true,
    "pluginData": true,
    "serviceWorkers": true,
    "webSQL": true
  }, reload);
}
