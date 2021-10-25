import { onAuthStateChanged } from "./firebase.js";


function get() {
    chrome.tabs.getSelected(null, function (tab) {
        tabID = tab.id;
        tabUrl = tab.url;
        document.getElementById("op").innerHTML = tabUrl;
    });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log(" at authProvider use Effect", user);
    });
}
get();

function exitFunc() {
    self.close();
}