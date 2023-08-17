var txtIn = document.querySelector("#txt-ip")
var btnTranslate = document.querySelector("#btn-translate")
var txtOut = document.querySelector("#txt-op")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTanslationURL(input){
    return serverURL + "?" +"text="+input
}

btnTranslate.addEventListener("click", function clickEventHandler(){
    var inputText = txtIn.value

    fetch(getTanslationURL(inputText))
        .then(response => response.json())
        .then(json => {
           var translatedText = json.contents.translated
           txtOut.innerText = translatedText
        })
})