function onRequest(request, sender, sendResponse) {
  if(request.domain === "9gag.com"
    || request.domain === "vk.com"
    || request.domain === "habrahabr.ru"
    || request.domain === "ensemplix.ru") {
    chrome.pageAction.setPopup({tabId: sender.tab.id, popup: "popup.html?domain=" + request.domain});
  };
  chrome.pageAction.show(sender.tab.id);
  sendResponse({});
};

chrome.extension.onRequest.addListener(onRequest);