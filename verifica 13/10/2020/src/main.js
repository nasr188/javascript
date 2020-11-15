
/* creiamo un import per tutti i funzione nelle file jsN */
import {createDiv} from './script1.js';
console.log(createDiv);


import {createDiv2} from './script2.js';
console.log(createDiv2);

import {createDiv3} from './script3.js';
console.log(createDiv3);


 // creiamo tre promises per callback the functions 
 let prom = duration => new Promise((resolve, reject) => {

    setTimeout(() => {
       resolve();
    }, duration);
 });
 prom(3000).then( createDiv());
 
 let prom2 = duration => new Promise((resolve, reject) => {

    setTimeout(() => {
       resolve();
    }, duration);
 });
 prom2(6000).then( createDiv2());


 let prom3 = duration => new Promise((resolve, reject) => {

    setTimeout(() => {
       resolve();
    }, duration);
 });
 prom3(9000).then( createDiv3());
 
 
 //bubble fase

 //il primo Div
 let action1 = document.querySelector(".pagf");
console.log(action1);
action1.addEventListener("click" , () => {
document.querySelector(".pagf").style.backgroundColor = "red";
 })

//il secondo Div
 let action2 = document.querySelector(".pagf2");
 console.log(action2); 
action2.addEventListener("click" , () => {
document.querySelector(".pagf2").style.backgroundColor = "red";
 })

//il terzo Div
 let action3 = document.querySelector(".pagf3");

 console.log(action3);
  
action3.addEventListener("click" , () => {
document.querySelector(".pagf3").style.backgroundColor = "red";
 })