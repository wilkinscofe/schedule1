document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

let schedule = [];

function loadSchedule() {
  const retrievedArray = JSON.parse(localStorage.getItem("storedSchedule"));
  if (!retrievedArray) {
    schedule = [
      "English",
      "Math",
      "Science",
      "SSTE",
      "DVC",
      "Math",
      "Science",
      "SSTE",
      "DVC",
      "English",
    ];

    // return schedule;
  } else {
    schedule = [...retrievedArray];
    // return schedule;
  }
}

function saveStorage() {
  localStorage.setItem("storedSchedule", JSON.stringify(schedule));
}

function initApp() {
  loadSchedule();
  displaySchedule(false);
}

function edit() {
  displaySchedule(true);
}

function cancel() {
  loadSchedule();
  displaySchedule(false);
}

function save() {
  saveStorage();
  displaySchedule(false);
}
function inputHandler(event) {
  const inputvalue = event.target.value;
  const i = event.target.id;
  schedule[parseInt(i)] = inputvalue;
  // const stuffToBeSaved = document.querySelector(".input");
  console.log(i);
}

function createEditor(classname, index) {
  const inputElement = document.createElement("input");
  inputElement.addEventListener("input", inputHandler);
  inputElement.setAttribute("class", "input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("value", classname);
  inputElement.setAttribute("id", index);

  return inputElement;
}

// 1. for (index = 0; periods.length-1; i++)
// for (const classname of period1) {
//   // loop periods
//   //    for each class,
//   //    create td element and add to container

//   const realClass = create1ClassInput(classname);
//   container.appendChild(realClass);
// }

function clear() {
  document.getElementById("container").innerHTML = "";
}

// function openEditor() {
//   const classToBeEdited = document.getElementsByClassName("cell");
//   const input = document.createElement("input");
//   input.setAttribute("class", "input");
//   classToBeEdited.innerHTML = "";
//   classToBeEdited.appendChild(input);
// }

function createClass(classname) {
  const td = document.createElement("td");
  td.setAttribute("class", "cell");
  td.setAttribute("Id", "classroom");
  td.innerHTML = classname;
  // const editButton = document.createElement("button");
  // editButton.innerHTML = "edit";
  // editButton.setAttribute("class", "edit");
  // td.appendChild(editButton);
  return td;

  //   container.appendChild(td);
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "text");
  //   input.setAttribute("class", "typebox");
  //   td.appendChild(input);
}

// function clear() {
//   document.getElementsByClassName("cell").id = "";
// }
// function msgprint() {
//   alert("You are Successfully Called the JavaScript function");
// }
function displaySchedule(enableEdit) {
  clear();

  const container = document.getElementById("container");
  let tr;
  for (let index = 0; index < schedule.length; index++) {
    if (index % 5 === 0) {
      tr = document.createElement("tr");
      container.appendChild(tr);
    }
    // if (!tr || tr.childElementCount == 5) {
    //   tr = document.createElement("tr");
    //   container.appendChild(tr);
    // }
    const classname = schedule[index];
    // let realClass;
    // if (inputMode) {
    //   realClass = createEditor(classname);
    // } else {
    //   realClass = create1Class(classname);
    // }

    const realClass = enableEdit
      ? createEditor(classname, index)
      : createClass(classname);
    tr.appendChild(realClass);
  }
}
