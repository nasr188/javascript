

function createDiv2(){
    //creare  il testo
    let txt2 = document.createTextNode("DIVE E P creati dal secondo js caricato");
    //console.log(txt2);

    //creare p tag e append textnode nel tag
    let parag2 = document.createElement("p");
    parag2.setAttribute("class", "pagf2");
    parag2.appendChild(txt2);
   
    //creare div tag e append p nel div tag
    let div2 = document.createElement("div");
    div2.setAttribute("class", "container2")
    div2.appendChild(parag2);
   //console.log(div2);
    let main2 = document.querySelector(".element-container");
    main2.append(div2);

   //style of div con class = "container"
    let contain2 = document.querySelector('.container2');
    //console.log(contain2);
  contain2.style.color = "gray";
  contain2.style.margin = "2rem";
  contain2.style.padding = "2rem";
  contain2.style.boxShadow = "0 0.4rem 0.5rem rgba(0, 0, 0, 0.3)"
    
};
export {createDiv2};

