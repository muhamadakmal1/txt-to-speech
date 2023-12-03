document.addEventListener("DOMContentLoaded", function() {
  const speakBtn = document.querySelector("#playBtn");
  const query = document.querySelector("#text");

  speakBtn.addEventListener("click", playSpeech);

  function playSpeech() {
    let textToBeSpoken = query.value.trim();
    if (textToBeSpoken !== "") {
      // Basic language detection based on keywords
      if (textToBeSpoken.includes("नमस्ते")) { // Hindi keyword
        responsiveVoice.speak(textToBeSpoken, "Hindi Male");
      } else if (textToBeSpoken.includes("안녕하세요")) { // Korean keyword
        responsiveVoice.speak(textToBeSpoken, "Korean Male");
      } else if (textToBeSpoken.includes("こんにちは")) { // Japanese keyword
        responsiveVoice.speak(textToBeSpoken, "Japanese Male");
      } else if (textToBeSpoken.includes("ہیلو")) { // Urdu keyword
        responsiveVoice.speak(textToBeSpoken, "Urdu Male");
      } else if (textToBeSpoken.includes("你好")) { // Chinese keyword
        responsiveVoice.speak(textToBeSpoken, "Chinese Male");
      } else {
        // Default to English if no specific keyword is found
        responsiveVoice.speak(textToBeSpoken, "UK English Male");
      }
    } else {
      console.log("Please enter some text to be spoken.");
      // You might want to show an error message to the user here.
    }
  }
});