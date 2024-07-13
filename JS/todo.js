let btn=document.querySelector("button");
let task=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    ul.appendChild(item);
    item.innerText=task.value;  
    task.value="";
    
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
    item.appendChild(del);    
});

//only applies to old elements

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }

//for new elements
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
