const input_box = document.getElementById("input_box");
const liste = document.querySelector(".list-group");
const att = document.createAttribute("class")
const add = document.getElementById("add")
const list_content=document.getElementById("list-container")
 //creation de la balise li

  
  //ajout de li dans list_content
    
  let li,i,check;
  //ajout de classe a la balise
 
  //
//fonction
    add.addEventListener("click", function (e) {


    if(input_box.value === ""){
        alert("Vous devez ecrire une tache")
    }else {
       
        li= document.createElement("li");
        i=document.createElement("i")
        check=document.createElement("input")

        //ajout de la valeur de input dans le li
        li.innerHTML = input_box.value;
         // let div=document.createElement("div")
         li.setAttribute("class","list-group-item flex-item-left")
         li.setAttribute("onclick","f(this)")
         i.setAttribute("class","fas fa-times")
         //  let span =document.createElement("span")
         // span.innerHTML= "\u00d7";
         //ajout du span dans li
         check.setAttribute("class","form-check-input")
         check.setAttribute("type","checkbox")
       
         list_content.appendChild(li);

        li.prepend(check)
        li.appendChild(i)
        console.log(li);
    }

    input_box.value = "";
    // save();

})
function f(e){

li.style.textDecoration="line-through"
li.remove(e)
   }

    list_content.addEventListener("click",function(e){
        
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            
            // save()
        }
        else if(e.target.tagName === "span"){
            e.target.parentElement.remove();
            // save()
        }
    }, false);
    //
 
//  function save(){
//      localStorage.setItem("data", list_content.innerHTML);
//  }

//  function showList(){
//      list_content.innerHTML= localStorage.getItem("data")
//  }
//  showList()
// };
// ajouterTache()