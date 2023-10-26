/**
It is used in the nav bar.
A clock function is added to the upper right corner of the webpage so that users can easily see the current time when visiting the webpage.
*/
function currenttime() {
    let currenttime = new Date();
    let currenthour = currenttime.getHours();
    let currentminute = currenttime.getMinutes();
    let currentsecond = currenttime.getSeconds();
//get the current time
    document.getElementById("1").innerText = Math.floor(currenthour/10);
    document.getElementById("2").innerText = currenthour % 10;
    document.getElementById("4").innerText = Math.floor(currentminute/10);
    document.getElementById("5").innerText = currentminute % 10;
    document.getElementById("7").innerText = Math.floor(currentsecond/10);
    document.getElementById("8").innerText = currentsecond % 10;
  }
//Because js's / is not an integer division but will find a floating point number, so here I use the Math.floor() method to round down and display it in a specific position
  currenttime();
  setInterval(currenttime,1000);
//Run every 1000 milliseconds

/**
 * It is used in the Account-login page.
In the position where the user enters the password, the function of limiting the number of characters in the text input is connected, which can prevent the user from inputting too many words.
*/
var inputnumber = text.querySelector("form input"),
    calculatedlength = text.querySelector("form .counter"),
    lengthmaximum = input.getAttribute("maxlength");
//get information from user input
    inputnumber.onkeyup = ()=>{
      calculatedlength.innerText = lengthmaximum - inputnumber.value.length;
    }
//Calculate whether the length of the input text exceeds the fixed value

/**
It is used in the Account-login page.
After the user fills in the email address and password, click the login button, and there will be a pop-up window prompting the user to log in successfully. After clicking the OK button on the pop-up window, the page will automatically jump to the account page.
*/
function welcome(){
    if (confirm("You have successfully logged in ! ")){     
    }}
//When the user clicks to log in, a pop-up window pops up and needs to be confirmed to proceed to the next step.
  
/**
 * It is used in the Book page.
This feature can help users determine today's date when considering booking tickets, and better schedule time
*/
function currentdate(){
	document.getElementById("date").innerHTML=Date();
}
//After the "date" is recognized, the current date will be displayed on the page