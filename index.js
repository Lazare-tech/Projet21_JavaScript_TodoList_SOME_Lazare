
//on stocker la valeur saisie dans input_box
let input_box = document.getElementById("input_box"),
//selection des lis dans se trouvant list-container
    items = document.querySelectorAll("#list-container li"),
    //declaration dun tableau tab et variable index
    tab = [], index;
//boucle for 
for (let i = 0; i < items.length; i++) {
    //insertion d la valeur de input dans le tableau tab avec son rang
    tab.push(items[i].innerHTML);
    
}

//boucle for lorsquon click sur un li
for (let i = 0; i < items.length; i++) {
    //lors du click sur un li specifique,une fonction sexecute
    items[i].onclick = function () {
        //et undex contient la valeur du li et son rang
        index = tab.indexOf(this.innerHTML);
        //lors du clic sur un li, on le met dans le input
        input_box.value = this.innerHTML

    }
}
//mis a jour du tableau 

function mettreAJourTableau() {
 //on met la taille du tableau a zero
    tab.length = 0;
    items = document.querySelectorAll("#list-container li")
    for (let i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }
}
function add() {
    //selection de lid list-container
    let list_content = document.getElementById("list-container"),
    //ajout de la valeur saisie dans input dans text
        text = document.createTextNode(input_box.value),
        //creation de li
        li = document.createElement("LI");
    //ajout du text saisie dans li
    li.appendChild(text);
    //et ajout du li dans list_content 
    list_content.appendChild(li)
    //appel de la fonction mettreAjourTableau pour ajouter la valeur saisie dans le input dans le tableau tab
    mettreAJourTableau();
    // lors du click sur un li 
    li.onclick = function () {
        //on recupere son rang
        index = tab.indexOf(li.innerHTML);
        //log console pour afficher le rang
        // console.log(li.innerHTML + "INDEX" + index);
        //lors du clic sur un li, on le met dans le input
        input_box.value = li.innerHTML

    }

}
//fonction editer
function edit() {
    //editer le li selectionner et present dans le input
    items[index].innerHTML = input_box.value;
    //appel de la fonction mettreAjourTableau pour enregistrer les modifications
    mettreAJourTableau();

}
//fonction de supression
function delet() {
        //appel de la fonction mettreAjourTableau
    mettreAJourTableau();
    if (items.length > 0) {
        items[index].parentNode.removeChild(items[index]);
        input_box.value = ""

    }
}