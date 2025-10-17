let inputs = document.getElementById("inp")
let text = document.querySelector(".text")

function Add(){
    if(inputs.value == ''){
        alert("write something")
    }
    else{//add task
        let newEle = document.createElement('ul') 
       newEle.innerHTML = `${inputs.value}  
    
<div>
    <i class="fa-solid fa-pen-to-square edit"></i>  
     <i class="fa-solid fa-xmark delete"></i>
</div>`;

       
       text.appendChild(newEle)
       inputs.value = ''
       inputs.focus();
        saveData();

        
    }
}

inputs.addEventListener('keypress' ,e=>{
        if(e.key === 'Enter') Add();
})


text.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.closest('ul').remove();
        saveData();
    } 
    else if (e.target.classList.contains('edit')) {
        let currentTask = e.target.closest('ul');
        let currentText = currentTask.firstChild.textContent.trim();

        inputs.value = currentText; 
        currentTask.remove();       
        inputs.focus();
        inputs.select();
        saveData();
    }
     else if (e.target.tagName === 'UL') {
        let task = e.target.closest('ul');
        task.classList.toggle('completed');
        saveData();
     }
        
});    

function saveData(){
    localStorage.setItem("TodoData", text.innerHTML)
    
}

function showTask(){
    text.innerHTML = localStorage.getItem("TodoData")
    
}

showTask();









 /*|| e.target.closest('ul')*/