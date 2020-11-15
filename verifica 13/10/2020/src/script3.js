  
  
  
  function createDiv3(){
    //creare  il testo
    let txt3 = document.createTextNode("DIVE E P creati dal terzo js caricato");
    //console.log(txt3);

    //creare p tag e append textnode nel tag
    let parag3 = document.createElement("p");
    parag3.setAttribute("class", "pagf3");
    parag3.appendChild(txt3);
   
    //creare div tag e append p nel div tag
    let div3 = document.createElement("div");
    div3.setAttribute("class", "container3")
    div3.appendChild(parag3);
    //console.log(div3);
    let main3 = document.querySelector(".element-container");
    main3.append(div3);

   //style of div con class = "container"
    let contain3 = document.querySelector('.container3');
    //console.log(contain3);
  contain3.style.color = "gray";
  contain3.style.margin = "2rem";
  contain3.style.padding = "2rem";
  contain3.style.boxShadow = "0 0.4rem 0.5rem rgba(0, 0, 0, 0.3)"
    
};

export{createDiv3};

