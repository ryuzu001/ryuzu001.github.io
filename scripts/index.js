function getEmoji() {
  var x = Math.floor(Math.random() * 10); // 0 to 9
  var emoji;

  switch(x){
    case 0:
      emoji="❤️";
      break;
    case 1:
      emoji="🍕";
      break;
    case 2:
      emoji="🍛";
      break;
    case 3:
      emoji="🍙";
      break;
    case 4:
      emoji="☕";
      break;
    case 5:
      emoji="💖";
      break;
    case 6:
      emoji="🍣";
      break;
    case 7:
      emoji="🍩";
      break;
    case 8:
      emoji="🍦";
      break;
    case 9:
      emoji="🍱";
      break;
    default:
      emoji="❤️";
      break;
  }
  return emoji;
}
function getDateString(){
  var dateRef = new Date(document.lastModified);
  var optionsDay = { weekday: 'long' };
  var optionsMon = { month: 'long' };
  var optionsTime = { hour: '2-digit', minute: '2-digit' };

  return "Last modified " + new Intl.DateTimeFormat('en-US', optionsDay).format(dateRef) + ", " + new Intl.DateTimeFormat('en-US', optionsMon).format(dateRef)
  + " " + dateRef.getDate() + ", " + dateRef.getFullYear() + " at " + new Intl.DateTimeFormat('en-US', optionsTime).format(dateRef);
}

document.getElementById("emoji").innerHTML = getEmoji();
document.getElementById("date").innerHTML = getDateString();