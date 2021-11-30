"use strict";

const task = document.getElementById("task");
const priority = document.getElementById("priority");
const statusas = document.getElementById("status");
const percent = document.getElementById("percent");
const myTable = document.querySelector("tbody");
const table = document.getElementById("table");
const myForm = document.querySelector("form");
const start = document.getElementById("start");
let show = document.getElementsByClassName("show");
const myButton = document.getElementById("myButton");
const eilute = document.getElementById("td");

paslepti();

myButton.addEventListener("click", function (e) {
  e.preventDefault();
  addToDo();
  myForm.reset();
  rodyti();
});

function paslepti() {
  let show = document.getElementById("show");
  show.style.display = "none";
}
function rodyti() {
  let show = document.getElementById("show");
  show.style.display = "block";
}

function addToDo() {
  if (
    task.value !== "" &&
    priority.value !== "choose priority" &&
    statusas.value !== "Choose status" &&
    percent.value !== "Choose..."
  ) {
    // kuriu eilute, ja idedu i table body
    const myRow = document.createElement("tr");
    myTable.appendChild(myRow);
    const newCol = document.createElement("td");
    const checkBtn = document.createElement("i"); //sukuriu i elementa
    checkBtn.className = "fa fa-check"; // priskiriu klase
    checkBtn.style.cursor = "pointer";
    newCol.appendChild(checkBtn);
    myRow.appendChild(newCol);
    // kuriu stulpeli, i ji idedu task reiksme
    const myCol = document.createElement("td");
    myCol.textContent = task.value;
    //   stulpeli appendinu eilutei
    myRow.appendChild(myCol);
    // check funkcija
    checkBtn.addEventListener("click", function () {
      myCol.style.textDecoration = "line-through";
      myCol.style.color = "green";
      checkBtn.style.color = "green";
    });
    checkBtn.addEventListener("dblclick", function () {
      myCol.style.textDecoration = "none";
      myCol.style.color = "";
      checkBtn.style.color = "";
    });
    //   mano kodas priority reiksmei ideti
    const myCol1 = document.createElement("td");
    const myPriority = document.createElement("p");
    myPriority.innerText = priority.value;
    switch (priority.value) {
      case "High":
        myPriority.className = "btn btn-warning";
        break;
      case "Normal":
        myPriority.className = "btn btn-success";
        break;
      case "Low":
        myPriority.className = "btn btn-info";
        break;
    }
    myCol1.appendChild(myPriority);
    myRow.appendChild(myCol1);
    //status kurimas
    const stat = document.createElement("td");
    const myStatus = document.createElement("p");
    myStatus.innerText = statusas.value;
    switch (statusas.value) {
      case "Complete":
        break;
      case "In progress":
        break;
      case "New":
        break;
    }
    stat.appendChild(myStatus);
    myRow.appendChild(stat);
    //percent kurimas
    const procentas = document.createElement("td");
    const myPercent = document.createElement("p");
    myPercent.innerText = percent.value;
    switch (percent.value) {
      case "100%":
        myPercent.className = "progress-bar progress-bar-striped bg-success";
        myPercent.style = "width:100%";
        break;
      case "75%":
        myPercent.className = "progress-bar progress-bar-striped bg-info";
        myPercent.style = "width:75%";
        break;
      case "50%":
        myPercent.className = "progress-bar progress-bar-striped bg-warning";
        myPercent.style = "width:50%";
        break;
      case "25%":
        myPercent.className = "progress-bar progress-bar-striped";
        myPercent.style = "width:25%";
        break;
      case "0%":
        myPercent.className = "progress-bar progress-bar-striped bg-danger";
        myPercent.style = "width:10%";
        break;
    }
    procentas.appendChild(myPercent);
    myRow.appendChild(procentas);

    // date pasirinkimas
    let dateControl = document.querySelector('input[type="date"]');
    //   console.log(dateControl.value);
    const datos = document.createElement("td");
    const myDate = document.createElement("p");
    myDate.innerText = dateControl.value;

    datos.appendChild(myDate);
    myRow.appendChild(datos);

    //   delete mygtuko kurimas
    const myCol2 = document.createElement("td");
    const myDeleteBtn = document.createElement("button");
    myDeleteBtn.innerText = "Delete";
    myDeleteBtn.className = "btn btn-danger";
    myCol2.appendChild(myDeleteBtn);
    myRow.appendChild(myCol2);

    myDeleteBtn.addEventListener("click", function (e) {
      e.preventDefault();
      deleteTask(e.target.parentNode.parentNode);
    });
    function deleteTask(row) {
      myTable.removeChild(row);
    }
  } else {
    alert("Visi laukai turi buti uzpildyti");
  }
}
