var a = document.getElementById("input1");
var b = document.getElementById("input2");
var table = document.getElementById("myTable")
var c = document.getElementById("input3");
var btn = document.getElementById("btn");
const add = document.getElementById("add");
var value1,value2;

add.addEventListener("click",handleAdd);
btn.addEventListener("click",handleSubmit);
a.addEventListener("click",handleClickA);
// b.addEventListener("click",handleClickB);
window.addEventListener("load", () => {
    value1 = false;
    // value2 = false;
    // value3 = false; 
    if(value1 == false){
        c.checked = true
    }else{
        c.checked = false
    }
  });
function handleClickA(){
value1 = (a.checked);
console.log(value1)
if(value1 == false){
    c.checked = true
}else{
    c.checked = false
}
}
// function handleClickB(){
// value2 = (b.checked);
//     console.log(value2)
// }
function handleSubmit(e){
    e.preventDefault();
    if(value1 == false){
        c.checked = true
    }else{
        c.checked = false
    }
}

function handleAdd(e){
    e.preventDefault();
    var row = table.insertRow();

    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.innerHTML = value1 == true ? 1 : 0;
    cell2.innerHTML = c.checked == true ? 1: 0; 
}
// function handleSubmit(e){
//     e.preventDefault();
//     if(value1 == false && value2== false){
//         c.checked = false;
//     }
//     else if(value1 == false && value2== true){
//         c.checked = true;
//     }
//     else if(value1 == true && value2== false){
//         c.checked = true;
//     }
//     else if(value1 == true && value2== true){
//         c.checked = true;
//     }
// }

