 const InputBox = document.getElementById("input box");
 const listContainer = document.getElementById("list-Container");
 function addtask () {
    if(InputBox.value == ""){
        alert("you must write something");
    }
    else{
          let    li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        Input.innerHTML = ""
    }
 
    InputBox.value ="";
 }
//  listContainer.addEventListener("click",function())
