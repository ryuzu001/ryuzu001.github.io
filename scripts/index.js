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

document.getElementById("emoji").innerHTML = emoji;
