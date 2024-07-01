const inputBox =document.querySelector('.input-box');
const listContainer=document.querySelector('#list-container');
const btn=document.querySelector('.btn')
function addTask(){
    if(inputBox.value === ''){
        alert(`You Must write something`);
    }
    else{
        let li=document.createElement('li');
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
    save()
}



btn.addEventListener('click',addTask)

listContainer.addEventListener('click',function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
    console.log(e);
})

function save(){
    localStorage.setItem('data',listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showData()
