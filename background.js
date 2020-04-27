"use strict";

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ on: false });
});

function updateIcon() {
  chrome.storage.sync.get("on", function (data) {
    const isTurnedOn = data.on;
    if (!isTurnedOn) {
      chrome.browserAction.setIcon({ path: "images/icon-on.png" });
    } else {
      chrome.browserAction.setIcon({ path: "images/icon-off.png" });
    }

    chrome.storage.sync.set({ on: !isTurnedOn });
  });
}

chrome.browserAction.onClicked.addListener(updateIcon);
