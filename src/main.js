let head = document.getElementsByClassName(".conatianer");
console.log(head);


let daaa =document.getElementById("book");
console.log(daaa);


let dv1 = document.createElement("ul");
daaa.appendChild(dv1);
dv1.style.listStyle = "none";

let lis1 = document.createElement("li");
let lis2 = document.createElement("li");
 dv1.appendChild(lis1);
 dv1.appendChild(lis2);

 let nam = document.createTextNode("No Excuses");
 lis1.appendChild(nam);

 let autore = document.createTextNode("Brain Tracy");
 lis2.appendChild(autore);


let text = document.querySelector('.recensione');
console.log(text);
text.style.display= "none";


 let info = document.createTextNode(" e uno dei megliori liberi nel mondo, aiuta a vedere il mondo del lavoro di un ponto di vista diverso, gestire la vita qutidiana in modo megliore e investire nel nostro futuro");
 text.appendChild(info);
  text.style.color = "red";
  text.style.margin = "3rem";
  text.style.padding = "3rem";
  text.style.boxShadow = "0 0.4rem 0.5rem rgba(0, 0, 0, 0.3";

  let btn = document.querySelector('.btn');
  btn.style.margin = "2rem";
  btn.style.padding= "0.5rem";
  btn.style.borderRadius = "0.6rem";
  btn.style.border = "none";
  btn.style.fontSize = "1rem";

   function divStyle(){
     let hideShow = document.querySelector('.recensione');

     if (hideShow.style.display === "none") {
      hideShow.style.display= "block";
     } else {
      hideShow.style.display = "none";
}
}
  
  
  




