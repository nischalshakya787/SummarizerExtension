chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message recieved from content script:", message);
  sendResponse({ reply: "Message recieved in the background script" });
});
