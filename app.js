let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

let text = "";
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    text +=
      "<span style='color:#ff0000'>FizzBuzz, i = " +
      i +
      "</span>" +
      "<br/ >" +
      "<br/ >";
  } else if (i % 3 === 0) {
    console.log("Fizz");
    text +=
      "<span style='color:#ffff00'>Fizz, i = " +
      i +
      "</span>" +
      "<br/ >" +
      "<br/ >";
  } else if (i % 5 === 0) {
    console.log("Buzz");
    text +=
      "<span style='color:#ff00ff'>Buzz, i = " +
      i +
      "</span>" +
      "<br/ >" +
      "<br/ >";
  } else {
    console.log(i);
    text +=
      "<span style='color:#00ffff'>" + i + "</span>" + "<br/ >" + "<br/ >";
  }

  document.getElementById("text").innerHTML = text;

  const element = document.querySelector(".content");

  element.style.backgroundColor = "darkorange";
  element.style.fontSize = "2rem";
  element.style.fontFamily = "verdana, Arial, sans-serif";
  element.style.textAlign = "center";
  element.style.padding = "0 10rem";
}
