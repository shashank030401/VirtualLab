var a = document.getElementById("input1");
var b = document.getElementById("input2");
var table = document.getElementById("myTable");
var c = document.getElementById("input3");
var btn = document.getElementById("btn");
const add = document.getElementById("add");
var value1, value2,value3;

add.addEventListener("click", handleAdd);
btn.addEventListener("click", handleSubmit);
a.addEventListener("click", handleClickA);
b.addEventListener("click", handleClickB);

window.addEventListener("load", () => {
  value1 = false;
  value2 = false;
  value3 = false; 
});


function handleClickA() {
  value1 = a.checked;
  console.log(value1);
}
function handleClickB() {
  value2 = b.checked;
  console.log(value2);
}

// to add values in table 
function handleAdd(e) {
  e.preventDefault();
  var row = table.insertRow();

  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  cell1.innerHTML = value1 == true ? 1 : 0;
  cell2.innerHTML = b.checked == true ? 1: 0;
  cell3.innerHTML = c.checked == true ? 1: 0;
}
// OR functionality
function handleSubmit(e) {
  e.preventDefault();
  if (value1 == false && value2 == false) {
    c.checked = false;
  } else if (value1 == false && value2 == true) {
    c.checked = false;
  } else if (value1 == true && value2 == false) {
    c.checked = false;
  } else if (value1 == true && value2 == true) {
    c.checked = true;
  }
}
