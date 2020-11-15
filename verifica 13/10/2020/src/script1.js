




function createDiv () {
    //creare  il testo
    let txt = document.createTextNode("DIVE E P creati dal primo js caricato");
    //console.log(txt);

    //creare p tag e append textnode nel tag
    let parag = document.createElement("p");
    parag.setAttribute("class", "pagf");
    parag.appendChild(txt);
   
    //creare div tag e append p nel div tag
    let div = document.createElement("div"); 
    div.setAttribute("class", "container")
    div.appendChild(parag);
    let main = document.querySelector(".element-container");
    main.append(div);
    
    

   //style of div con class = "container"
    let contain = document.querySelector('.container');
    //console.log(contain);
  contain.style.color = "gray";
  contain.style.margin = "2rem";
  contain.style.padding = "2rem";
  contain.style.boxShadow = "0 0.4rem 0.5rem rgba(0, 0, 0, 0.3)"

};

export {createDiv};
