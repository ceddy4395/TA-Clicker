var group = 68;

console.log("started background process");

chrome.runtime.onMessage.addListener(function(request, sender, response){
    console.log("message received");
   response(68) 
});