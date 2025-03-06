// Function to shout a string (all caps)
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function to whisper a string (all lowercase)
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function to log a shouted string (all caps)
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function to log a whispered string (all lowercase)
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function to say something to a headphoned roommate based on the string
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  