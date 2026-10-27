const flashcards = [
{
question:"What is Python?",
answer:"Python is a high-level, interpreted programming language."
},
{
question:"Who created Python?",
answer:"Guido van Rossum."
},
{
question:"In which year was Python released?",
answer:"1991."
},
{
question:"What is a variable?",
answer:"A container that stores data values."
},
{
question:"How do you write a comment in Python?",
answer:"Using # symbol."
},
{
question:"How do you print output in Python?",
answer:"Using print() function."
},
{
question:"How do you take user input?",
answer:"Using input() function."
},
{
question:"What is a string?",
answer:"A sequence of characters."
},
{
question:"What is an integer?",
answer:"A whole number data type."
},
{
question:"What is a float?",
answer:"A decimal number data type."
},
{
question:"What is a Boolean?",
answer:"A data type with True or False values."
},
{
question:"What is a list?",
answer:"An ordered and mutable collection."
},
{
question:"How do you create a list?",
answer:"myList = [1,2,3]"
},
{
question:"What is a tuple?",
answer:"An ordered and immutable collection."
},
{
question:"How do you create a tuple?",
answer:"myTuple = (1,2,3)"
},
{
question:"What is a dictionary?",
answer:"A key-value pair collection."
},
{
question:"How do you create a dictionary?",
answer:"{'name':'John'}"
},
{
question:"What is a set?",
answer:"An unordered collection of unique elements."
},
{
question:"How do you create a set?",
answer:"{1,2,3} or set()."
},
{
question:"What does len() do?",
answer:"Returns the length of an object."
},
{
question:"What does type() do?",
answer:"Returns the data type."
},
{
question:"What is an if statement?",
answer:"Used for decision making."
},
{
question:"What is a for loop?",
answer:"Used to iterate through a sequence."
},
{
question:"What is a while loop?",
answer:"Executes repeatedly while condition is true."
},
{
question:"What does break do?",
answer:"Terminates the loop."
},
{
question:"What does continue do?",
answer:"Skips current iteration."
},
{
question:"What does pass do?",
answer:"Acts as a placeholder statement."
},
{
question:"What is a function?",
answer:"A reusable block of code."
},
{
question:"Which keyword defines a function?",
answer:"def"
},
{
question:"What is a return statement?",
answer:"Returns value from a function."
},
{
question:"What is recursion?",
answer:"A function calling itself."
},
{
question:"What is a module?",
answer:"A file containing Python code."
},
{
question:"How do you import a module?",
answer:"Using import keyword."
},
{
question:"What is pip?",
answer:"Python package manager."
},
{
question:"How do you install a package?",
answer:"pip install package_name"
},
{
question:"What is exception handling?",
answer:"Handling runtime errors."
},
{
question:"Which keywords handle exceptions?",
answer:"try and except."
},
{
question:"What is finally block?",
answer:"Executes whether an exception occurs or not."
},
{
question:"What is OOP?",
answer:"Object Oriented Programming."
},
{
question:"What is a class?",
answer:"Blueprint for creating objects."
},
{
question:"What is an object?",
answer:"Instance of a class."
},
{
question:"What is __init__()?",
answer:"Constructor method."
},
{
question:"What is inheritance?",
answer:"A child class acquires parent class properties."
},
{
question:"What is polymorphism?",
answer:"One interface, multiple implementations."
},
{
question:"What is encapsulation?",
answer:"Wrapping data and methods together."
},
{
question:"What is abstraction?",
answer:"Hiding implementation details."
},
{
question:"What is NumPy?",
answer:"Library for numerical computing."
},
{
question:"What is Pandas?",
answer:"Library for data analysis."
},
{
question:"What is Matplotlib?",
answer:"Library used for plotting graphs."
},
{
question:"What is Python mainly used for?",
answer:"Web development, AI, ML, Automation, Data Science and Cybersecurity."
}
];

let current = 0;

let bookmarks =
JSON.parse(
localStorage.getItem("bookmarks")
) || [];

const question =
document.getElementById("question");

const answer =
document.getElementById("answer");

const counter =
document.getElementById("counter");

const progressBar =
document.getElementById("progressBar");

const bookmarkList =
document.getElementById("bookmarkList");

const card =
document.getElementById("card");

function loadCard(){

card.classList.remove("flip");

question.innerText =
flashcards[current].question;

answer.innerText =
flashcards[current].answer;

counter.innerText =
`${current+1} / ${flashcards.length}`;

let progress =
((current+1) /
flashcards.length) * 100;

progressBar.style.width =
progress + "%";
}

function flipCard(){

card.classList.toggle("flip");
}

function nextCard(){

current++;

if(current >= flashcards.length){

current = 0;
}

loadCard();
}

function prevCard(){

current--;

if(current < 0){

current =
flashcards.length - 1;
}

loadCard();
}

function randomCard(){

current =
Math.floor(
Math.random() *
flashcards.length
);

loadCard();
}

function bookmarkCard(){

const item =
flashcards[current].question;

if(!bookmarks.includes(item)){

bookmarks.push(item);

localStorage.setItem(
"bookmarks",
JSON.stringify(bookmarks)
);

renderBookmarks();
}
}

function renderBookmarks(){

bookmarkList.innerHTML = "";

bookmarks.forEach(item => {

const li =
document.createElement("li");

li.textContent = item;

bookmarkList.appendChild(li);

});
}

document.addEventListener(
"keydown",
(e)=>{

if(e.key==="ArrowRight")
nextCard();

if(e.key==="ArrowLeft")
prevCard();

if(e.key===" ")
flipCard();
}
);

renderBookmarks();
loadCard();