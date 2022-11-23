let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

let text = "";
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    text +=
      /**
       * Vi kan iterera ut html-taggar här.
       * Då kan vi sätta css-värde på variablen i.
       * Antingen inline eller deklarera en klass i en extern css-fil.
       */
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
/**Detta kopplar ihop id = text. 
 * innerHTML tilldelar värdet som finns i variablen text
 * och skriver ut det till <P>-taggen med id="text"
 */
  document.getElementById("text").innerHTML = text;

  /**
   * Detta kopplar ihop selector med klassen .content som är satt på 
   * Body-taggen i index.html
   * Då kan vi lägga på css-värden på den valda selectorn.
   * OBS! Det finns fler sätt att hämta taggar, classer som vi inte visar här.
   * Ni kan finna dom här: https://www.w3schools.com/jsref/dom_obj_document.asp
   * 
   */
  const element = document.querySelector(".content");

  element.style.backgroundColor = "darkorange";
  element.style.fontSize = "2rem";
  element.style.fontFamily = "verdana, Arial, sans-serif";
  element.style.textAlign = "center";
  element.style.padding = "0 10rem";
}
