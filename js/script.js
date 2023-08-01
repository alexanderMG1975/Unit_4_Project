/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
let quotes = [{}, {}, {}, {}, {}];

quotes[0].quote = `Do or do not, there is no try`;
quotes[0].source = '73 Most Iconic Star Wars Quotes Fans Must Know';
quotes[0].citation  = 'Bell, C. (2023, April 6). 73 most iconic "Star wars" quotes True fans must know. Readers Digest. Retrieved April 25, 2023, from https://www.rd.com/article/star-wars-quotes/ ';
quotes[0].year = `2023`;
quotes[0].tags = `serious, wise, philosopical`;
quotes[1].quote = 'Adversity is an opportunity for change';
quotes[1].source = 'Overwatch Wiki '
quotes[1].citation = 'Zenyatta/quotes. Overwatch Wiki. (n.d.). Retrieved April 27, 2023, from https://overwatch-archive.fandom.com/wiki/Zenyatta/Quotes';
quotes[1].year='2023';
quotes[1].tags ='';
quotes[2].quote = 'The truth is often what we make of it';
quotes[2].source = 'Five Obi Wan Quotes to Live By'
quotes[2].citation='';
quotes[2].year = '2022';
quotes[2].tags='';
quotes[3].quote = 'Part of having feelings is learning to integrate them into your life, Data, ...learning to live with them. No matter what the circumstances ... Sometimes it takes courage to try, Data. Courage can be an emotion too';
quotes[3].source = 'Wikiquotes';
quotes[3].citation='';
quotes[3].year = '1994';
quotes[3].tags='deep, interesting, thoughtful, wise';
quotes[4].quote = 'It doesn’t take X-Ray Vision to see you are up to no good.';
quotes[4].source = '50 Awesome Superman Sayings and Quotes';
quotes[4].citation='Alvsa, Z. (2023, April 10). 50 awesome superman sayings &amp; quotes. Wealthy Gorilla. Retrieved April 27, 2023, from https://wealthygorilla.com/superman-quotes/ ';
quotes[4].year = '2023';
quotes[4].tags='';





//well hello there

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randomVar = 0;
  randomVar = Math.floor((Math.random()*quotes.length));
  console.log(randomVar);
  return quotes[randomVar];
}
/***
 * `printQuote` function
***/
function printQuote(){
  let tempObject = getRandomQuote();
  let htmlMessage = ` `;
  htmlMessage = `<p class="quote">${tempObject.quote}</p>
                 <p class="source">${tempObject.source}`;
  if(tempObject.citation != ''){ //if true, the citation does indeed contain a string
    htmlMessage += `<span class="citation"> ${tempObject.citation}</span>`;
  }
  if(tempObject.year != ''){
    htmlMessage += `<span class="year"> ${tempObject.year},</span>`;
  }
  if(tempObject.tags !=''){
    htmlMessage += `<span class="tags"> ${tempObject.tags}</span>`;
  }
  htmlMessage += `</p>`;
  changeBackgroundColor();
  document.getElementById('quote-box').innerHTML = htmlMessage;
}


/***
 * `changeBackgroundColor` function
***/
function changeBackgroundColor(){ //change the background color of the page to a new color every time the button is pressed
    let htmlColorValue = ``;      //this will hold an background-color:rgb(0,0,0) value that will be placed into the html as a "style" attribute
    let arg1 = 0;                 //the following arg values will hold random argument values to fill the rgb function 
    let arg2 = 0;
    let arg3 = 0;
    arg1 = Math.floor((Math.random()*255));
    arg2 = Math.floor((Math.random()*255));
    arg3 = Math.floor((Math.random()*255));
    htmlColorValue = `background-color:rgb(${arg1},${arg2},${arg3});`;
    // let htmlTestColor = "background-color:pink;";
    document.getElementById("main-body").setAttribute("style", htmlColorValue); 
 } 

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
//well hello there