console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


const userInput = Number(prompt("Please input a number"));

if(userInput < 3){
  console.log("answer is too low")
}
else if(userInput > 3 ){
console.log("answer is too high");
}
else{
  console.log("you guessed it!");
}

const birthMonth = prompt("what is your birth month?");

switch(birthMonth.toLowerCase()){
  case "january":
    console.log("Capricorn")
    break;
    case "february":
      console.log("Aquarius")
      break;
      case "march":
        console.log("Pisces")
        break;
        case "april":
          console.log("Aries");
          break;
          case "may":
            console.log("Taurus");
            break;
            case "june":
              console.log("Gemini");
              break;
              case "july":
                console.log("Cancer");
                break;
                case "august":
                  console.log("Leo");
                  break;
                  case "september":
                    console.log("Virgo");
                    break;
                    case "october":
                      console.log("Libra");
                      break;
                      case "november":
                        console.log("Scorpio");
                        break;
                        case "december":
                          console.log("Saqittarius");
                          break;
                          default:
                            console.log("not a month");
}

const typeId = "01";
const colorId = "PU";
const sizeId = "L";

let type = "";
let color = "";
let size = "";

// type
switch(typeId){
 case "01":
  type = "tank top";
  break;
  case "02":
    type = "t-shirt";
    break;
    case "03":
      type = "long sleeve";
      break;
      case "04":
        type = "sweat shirt";
        break;
        default:
          type = "other";

}

//color

switch(colorId){
  case "BK":
    color = "black";
    break;
    case "BL":
      color = "blue";
      break;
      case "RD":
        color = "red";
        break;
        case "PU":
          color = "purple";
          break;
          default:
            color ="white";
}

//size

switch(sizeId){
  case "S":
    size = "small";
    break;
    case "M":
      size = "medium";
      break;
      case "L":
        size = "large";
        break;
        case "XL":
          size = "extra large";
          break;
          default:
            size = "one size fits all";
}

console.log(`Product: ${size}, ${color}, ${type}`);