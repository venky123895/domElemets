const addButton=document.getElementById('but');
const boxes=document.getElementById('main');
addButton.addEventListener('click',add);
let count=0;
function add(){
    const newElement=document.createElement('div');
    newElement.setAttribute('class','xxx');
    boxes.appendChild(newElement);
    count++;
    if(count===1){
        newElement.style.backgroundColor='blue';
    }
    else if(count===9){
        newElement.style.backgroundColor='green';
    }
    else if(count%2==0){
        newElement.style.backgroundColor='lime';
    }
   
}