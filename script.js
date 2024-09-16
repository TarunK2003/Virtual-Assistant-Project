console.log("Virtual Assistance");
let btn = document.querySelector("button");
let cont = document.querySelector("#content");
let siri = document.querySelector("#siri");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir");
    }
    else if(hours>=12 && hours<16){
       speak("Good Evening Sir");
    }
    else("Good Evening")
}
window.addEventListener('load' , ()=>{
    wishMe();
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recogination = new speechRecognition()
recogination.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript//address of the transcript matlb jo bhi hamne bola ha uska address
    content.innerText = transcript
    takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click" ,()=>{
    recogination.start();
    btn.style.display="none";
    siri.style.display="block";
})
function takeCommand(message){
    btn.style.display="flex";
    siri.style.display="none";
    if(message.includes("hello asta")){
        speak("Hello sir how can i help you");
    }
    else if(message.includes("how are you")){
        speak("hello sir i am asta your virtual assistance, i created by tarun programmer");
    }
    else if(message.includes("Open youtube")){
        speak("Opening youtube");
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("Open google")){
        speak("Opening google");
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("Open gmail")){
        speak("Opening gmail");
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("play song")){
        speak("Playing song i hove you like it");
        window.open("https://www.youtube.com/watch?v=neOQ8s60sHU&list=RDneOQ8s60sHU&start_radio=1&themeRefresh=1")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening facebook");
        window.open("https://www.whatsapp.com/","_blank")
    }
    else if(message.includes("time")){
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak("Sir the current time is "+time);

    }
    else if(message.includes("Date")){
        let Date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak("Sir the current Date is "+Date);
        
     }
    else if(message.includes("Open calculator")){
        speak("Opening calculator");
        window.open("https://www.google.com/search?q=calculator+online&rlz=1C1OPNX_enIN1124IN1124&oq=calculator&gs_lcrp=EgZjaHJvbWUqDQgBEAAYgwEYsQMYgAQyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDIKCAIQABixAxiABDIHCAMQABiABDIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIKCAcQABixAxiABDINCAgQABiDARixAxiABDIHCAkQABiPAtIBCDQzNjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8")
    }
    else{
        speak(`this is what i found on internet as regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
    
}




























