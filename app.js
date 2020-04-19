const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();


recognition.onstart = function () {
    btn.innerHTML = '...'
    btn.disabled = true
}

recognition.onresult = function (e) {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript
    btn.innerHTML = "Talk"
    btn.disabled = false
    readOutLoad(transcript)
}


btn.addEventListener('click', () => {
    recognition.start()
})


function readOutLoad(message) {
    content.textContent = message
    const speech = new SpeechSynthesisUtterance()
    speech.text = message
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech)
}