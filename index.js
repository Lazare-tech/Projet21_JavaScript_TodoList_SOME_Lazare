const input_box = document.getElementById("input_box");
const liste = document.querySelector(".list-group");
const att = document.createAttribute("class")
const add = document.getElementById("add")
//fonction
    add.addEventListener("click", function (e) {


    if(input_box.value === ""){
        alert("Vous devez ecrire une tache")
    }else {
        //creation de la balise li
        let li = document.createElement("li");
        let i=document.createElement("i")
        // let div=document.createElement("div")
        //ajout de classe a la balise
        li.setAttribute("class","list-group-item flex-item-left ")
        i.setAttribute("class","fas fa-times")

        li.innerHTML = input_box.value;
        liste.appendChild(li)
        li.appendChild(i)
    }

    input_box.value = "";

});
// };
// ajouterTache()