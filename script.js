let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice =document.querySelector("#voice")

function speak(text){

  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.rate=1.4
  text_speak.pitch=1.8
  text_speak.volume=1.7
  text_speak.lang="HI-EN"
  window.speechSynthesis.speak(text_speak)
}

function wishMe(){
  let day = new Date()
  let hours = day.getHours()
  if(hours>=0 && hours<12){
    speak("Good morning sir")
  }
  else if(hours>=12 && hours<16){
    speak("good afternoon sir")

  }
  else if(hours>=16 && hours<21){
    speak("good evening")
  }
  else{
    speak("good night")
  }
  
}
//  window.addEventListener(`load`,() =>{
//    wishMe()
//  })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{

 let currentIndex = event.resultIndex
 let transcript= event.results[currentIndex][0].transcript
 content.innerText =transcript

 takeCommand(transcript.toLowerCase())
  
  
}
btn.addEventListener("click",()=>{
  recognition.start()
  btn.style.display ="none"
  voice.style.display ="block"
})
function takeCommand(message){
    btn.style.display ="flex"
    voice.style.display ="none"
  if(message.includes("hello") || message.includes("hey")){
    speak("hello sir,What can i help you?")
  }
  else if(message.includes("who are you") || (message.includes("what's your name"))){
    speak("I am chitti ,created by Amar Singh")
  }

  else if(message.includes("how are you")){
    speak("I am fine ")
  }
  else if(message.includes("open youtube")){

    speak("opening youtube..")
    window.open("https://www.youtube.com","_blank")
  }

  else if(message.includes("open facebook")){

    speak("opening facebook..")
    window.open("https://www.facebook.com","_blank")
  }

  else if(message.includes("open instagram")){

    speak("opening instagram..")
    window.open("https://www.instagram.com","_blank")
  }

  else if(message.includes("open google")){

    speak("opening google..")
    window.open("https://www.google.com","_blank")
  }

  else if(message.includes("open linkedin")){

    speak("opening linkedin..")
    window.open("https://www.linkedin.com","_blank")
  }

  else if(message.includes("open spotify")){

    speak("opening spotify..")
    window.open("https://www.spotify.com","_blank")
  }
  else if(message.includes("open calculator")){

    speak("opening calculator..")
    window.open("calculator://")
  }

  else if(message.includes("open whatsapp")){

    speak("opening whatsapp..")
    window.open("whatsapp://")
  }
  else if(message.includes("open vitual studio code")){

    speak("opening vscode..")
    window.open("virtual studio code://")
  }

  else if(message.includes("time")){
    let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
  }

  else{

    let finalText = "this is what i found on internet regarding"+ message.replace("jarvis","")||message.replace("javis","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`,"_blank")
  }
}