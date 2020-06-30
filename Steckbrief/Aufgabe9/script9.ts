//Aufgabe 9 komplett neu, da ich bei der Alten nach ewigem probieren das Problem nicht lösen konnte.//
//Hilfe von YouTube//

// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
// tslint:disable-next-line: typedef
const list = document.getElementById("list");
// tslint:disable-next-line: typedef
const input = document.getElementById("input");
// tslint:disable-next-line: typedef
const CHECK = "fa-check-circle";
// tslint:disable-next-line: typedef
const UNCHECK = "fa-circle";
// tslint:disable-next-line: typedef
const LINE_THROUGH = "lineThrough";

// tslint:disable-next-line: typedef
let LIST, id;

// tslint:disable-next-line: typedef
let data = localStorage.getItem("TODO");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}


// tslint:disable-next-line: typedef
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  // tslint:disable-next-line: typedef
  document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
  // tslint:disable-next-line: typedef
    const toDo = input.value;

    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });

      id++;
      document.querySelector("#counter").innerHTML = "Total: " + id;
    }
    input.value = "";
  }
});


// tslint:disable-next-line: typedef
  const DONE = done ? CHECK : UNCHECK;
// tslint:disable-next-line: typedef
  const LINE = done ? LINE_THROUGH : "";

// tslint:disable-next-line: typedef
  const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

// tslint:disable-next-line: typedef
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// tslint:disable-next-line: typedef
function loadList(array) {
// tslint:disable-next-line: typedef
  array.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// tslint:disable-next-line: typedef
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// tslint:disable-next-line: typedef
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
  id--;
  document.querySelector("#counter").innerHTML = "Total: " + id;
}

// tslint:disable-next-line: typedef
list.addEventListener("click", function (event) {
// tslint:disable-next-line: typedef
  const element = event.target;
// tslint:disable-next-line: typedef
  const elementJob = element.attributes.job.value;

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
});
});