showEOPOption = document.querySelector("#show-end-of-para > input[type=checkbox]");

// Initialize the form with the user's option settings
chrome.storage.local.get(['GrammarlyShowEOP'], (data) => {
  showEOPOption.checked = Boolean(data.GrammarlyShowEOP);
});

// Immediately persist options changes
showEOPOption.addEventListener('change', (event) => {
  output = event.target.checked;
  console.log("Setting")
  chrome.storage.local.set({"GrammarlyShowEOP": output});
});
