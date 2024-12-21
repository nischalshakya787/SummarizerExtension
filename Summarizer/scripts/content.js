chrome.runtime.sendMessage({ greeting: "Hello, background!" }, (response) => {
  console.log("Response from background script:", response.reply);
});
