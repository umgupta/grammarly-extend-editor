function applyEOPRules (){
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('.ql-editor p:after{ clear:both;content:"¶"; }', sheet.cssRules.length);
}

function removeEOPRules(){
    var sheet = window.document.styleSheets[0];
    sheet.insertRule('.ql-editor p:after{content:none; }', sheet.cssRules.length);
}

// listen to changes
chrome.storage.local.onChanged.addListener((changes) => {
    EOPSelector = document.querySelector("#show-end-of-para > input[type=checkbox]")
    if (changes.GrammarlyShowEOP != null) {
        if (changes.GrammarlyShowEOP.newValue === true) {
            applyEOPRules()
        }
        if (changes.GrammarlyShowEOP.newValue === false) {
            removeEOPRules()
        }
    }
});