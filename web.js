// let name = "fayyaz"
// let arr = Array.from(name)
// console.log(arr)

// practice set #5

// let arr = [1, 3, 4, 5, 6, 78]
// let s = prompt("enter the value")
// s = Number.parseInt(s)
// arr.push(s)
// console.log(arr)

// const fayyaz = {
//     gender: "msleee",
//     name: "fayyaz",
//     age: 24,
// };

// let age = 35;
// console.log(age);

// const num = 343;
// console.log(num); 

// this the example of inndex of js,,,


// let firstName = "fayyaz";
// let lastName = "khan";

// console.log(firstName.indexOf("y"));
// console.log(firstName.lastIndexOf("y"));

// let radius = 23;
// const pi = 3.56;

// let total = radius + pi;
// console.log(total);

// template litrals example ...

// let firstName = "fayyaz";
// let lastName = "khan";
// let videos = 34;
// let subcribers = 4544;

// let result = `channel name ${firstName} ${lastName} has videos is ${videos} and subcribers is ${subcribers}`;
// console.log(result);

// example of arrays in js...

// let product = ["bnana", "apple", "mango", 23, 43];
// product[2] = "jam";
// console.log(product[3])
// console.log(product);

// FORLOOP EXAMPLE...

// for(let i = 0; i < 7; i++){
//   console.log("fayyaz")
// }

// EXAMPLE two...

// let arrr = ["dsuf", "hsadufh", "asdhfas"];
// arrr.push ("fayyaz");
// for(zia of arrr){
// console.log(zia);
// }

// if statment example 

// let f = 8;

// if(f > 16){
//   console.log("fayyaz");
// }else{
//     console.log("no");
// }

// let signal = "blue";

// if(signal == "red"){
//     console.log("please stop!");
// }else if(signal == "yellow"){
//  console.log("get ready");
// }else if(signal == "green"){
//  console.log("goooo!");
// }else {
//     console.log("elec. issue");
// }

// example of break & continue...

// let arrr = [23, 45, 45, 56, 56, 56, 56,67, 45];

// for(let i = 0; i < arrr.length; i++){

//    if(arrr[i] == 0){

//     console.log("SKIP");

//    }
//    console.log("arrr: ${arrr[i]}")
// }

// example of case method in javascript...

// let num = 10;

// switch(num){

//     case 10:
//     console.log("great");
//     break

//     case 8:
//     console.log("best");
//     break

//     case 6:
//     console.log("good");
//     break

//     case 4:
//     console.log("keep practice");
//     break

//     case 2:
//     console.log("slow");
//     break

//     default:
//         console.log("try again");
// }

// ternary operator example...

// const result = 10 > 4;

// if(result){
//     console.log("true value");
// } else{
//     console.log("false value");
// }

// const user = true;

// user ? console.log("true value") : console.log("false value"); 

// example of function...

// function fayyaz(){
//     console.log("welcome dear");
// }
// fayyaz();

// example of argument and perameter...


// let name = "fayyaz";

// function verr(name){
//    console.log(`welcome ${name}`);
// }

// verr("fayyaz");

// function addition(numOne, numTwo){
//     let total = numOne + numTwo;
//     console.log(total);
// }

// addition(34,56);

// function fullName(firstName, lastName){
//     console.log(`WELCOME ${firstName} ${lastName}`);
// }

// fullName("fayyaz", "khan");

// example of arrow function..

// let myName = () => {
//     console.log("fayyaz khan")
// };

// myName();

// example of object letrals....

// let student = {
//     name: "fayyaz",
//     age: 24,
//     email: "fayyazkhanlala2222@gmail.com",

// };

// console.log(student);
// console.log(typeof student);

// example of method..

// let arr = "ZIAKHAN"; // ==>  this is example of calling lowercase function for this var..

// let user = {
//     name: "fayyaz",
//     age: 24,
//     email: "@gmail.com,fayyazkhanlala2222",
    
//     login: function(haha){
//         return `login ${haha}` 
//     },

//     logout: function(hehe){
//         return `logout ${hehe}` // here im using template letrals..
//     }
// }

// // console.log(user);
// console.log(user.logout("mawaz"));
// console.log(arr.toLowerCase());
// console.log(user.login("zia"));

// console.log(Math); // example of math tag globel tag..

// const link = document.querySelector("a");
// console.log(link.getAttribute("link"));

// const heading = document.querySelector("h1");
// console.log(heading.classList);

// let xia = document.querySelectorAll('p'); // this is method of DOM to reach the all p tag in document..
// console.log(xia);

// Select the element with id="active"
// const activeParagraph = document.getElementById('active');

// Log the selected element to the console
// console.log(activeParagraph);

// Optionally, change the text of the selected element
//  activeParagraph.textContent = "I'm learning JavaScript as a beginner!";

// let selctag = document.getElementsByTagName('p');
// console.log(selctag);

// let clsreach = document.getElementsByClassName('fayyaz-khan');

// console.log(clsreach);

// let link = document.querySelector("a");
// console.log(link);

// let classes = document.querySelectorAll(".fayyaz-khan");
// console.log(classes);

// const active = document.querySelector("#active");
// active.setAttribute("style", "color: blue;")

// EXAMPLE OF EVENTS....

// const butt = document.querySelector("button");
// butt.addEventListener("click", () => {
//    butt.setAttribute("style", "display: none");
// })

// const butt = document.querySelector("button");
// butt.addEventListener("click", () => {
//   console.log("Button Clicked!");
// })

// const products = document.querySelectorAll("li"); // these are example of event lisner to call li tags

// products.forEach(product => {
//    product.addEventListener("click", (event) => {
//     console.log(event.target.textContent);
//    })
// });

// const addproduct = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     addproduct.innerHTML += "<li>fayyaz-new</li>"
//     console.log(addproduct.innerHTML);
// })

// const add = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = "new pro";
//     add.append(li);
// })

// add.addEventListener("click", (event) => {
//     if(event.target.tagName === "LI"){
//         event.target.remove();
//     }
// })

//  const webp = document.querySelector("body");
// webp.addEventListener("mousemove", (event) => {
//     console.log(event);

// })

// const form = document.querySelector(".fayyaz");
// const p = document.querySelector("p");

// const usernamePtn = /^[a-z0-9]{6,10}$/;
// const feedbackPtn = /^.{20,50}$/;

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const userResult = usernamePtn.test(form.username.value);
//     const feedResult = feedbackPtn.test(form.feedback.value);

//    if(userResult && feedResult){
//     p.setAttribute("class", "success");
//     p.textContent = "thanks for submit";
//    }else{
//     p.setAttribute("class", "error");
//     p.textContent = "not submit try again";
//    }
// });

// form.username.addEventListener("keyup", (event) => {
//     const userResult = usernamePtn.test(event.target.value);
//     if(userResult){
//         form.username.setAttribute("class", "accepted");
//     }else{
//         form.username.setAttribute("class", "rejected");
//     }
// });

// MY FIRST PROJECT FORM DOM EXAMPLE...

const correctAnswer = ["206", "islamabad", "milk", "faul", "dynomic website"];
const form = document.querySelector(".quiz form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");
console.log(questions [1]);

form.addEventListener("submit", event => {
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {

        if(answer === correctAnswer[index]){
            score += 1;
            questions[index].classList.add("correct");
        } else{
            questions[index].classList.add("wrong");
        }

    });
    
    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("P").textContent = `you scored ${score}/5`;
});