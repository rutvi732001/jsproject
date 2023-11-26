let addNewTask = document.getElementById("addNewTask");
let btnSubmit = document.getElementById("btnSubmit");
let listTask = document.getElementById("listTask");
let unorderdList = document.getElementById("unorderdList");
let li ;
let checkbox;
let x;
atr = {
        
        }

btnSubmit.addEventListener("click",()=>{
    
    addlist();
})

function addlist()
{
    li = document.createElement("li");
    unorderdList.appendChild(li);
    li.style.listStyleType = "none";
    checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = 1;
      checkbox.id = "checkbox";
    li.appendChild(checkbox);
    
    x = document.createTextNode(addNewTask.value);
    li.appendChild(x);
    let span = document.createElement("span");
    li.appendChild(span);
    span.innerHTML=`x`;
    span.style.margin= "20px"

    span.addEventListener("click",()=>{
      li.remove();
    })

    checkbox.addEventListener("change",()=>{
      if(checkbox.checked){
       li.style.textDecoration ="line-through"
       
      //  li.remove()
      }
    })
    
}


