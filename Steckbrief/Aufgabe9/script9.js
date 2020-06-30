"use strict";
window.addEventListener("load", function () {
    const list = document.getElementById("list");
    const input = document.getElementById("input");
    const CHECK = "fa-check-circle";
    const UNCHECK = "fa-circle";
    const LINE_THROUGH = "lineThrough";
    let LIST, id;
    let data = localStorage.getItem("TODO");
    if (data) {
        LIST = JSON.parse(data);
        id = LIST.length;
        loadList(LIST);
    }
    else {
        LIST = [];
        id = 0;
    }
    function loadList(array) {
        array.forEach(function (item) {
            addToDo(item.name, item.id, item.done, item.trash);
        });
    }
    function addToDo(toDo, id, done, trash) {
        if (trash) {
            return;
        }
        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";
        const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;
        const position = "beforeend";
        list.insertAdjacentHTML(position, item);
    }
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
            const toDo = input.value;
            if (toDo) {
                addToDo(toDo, id, false, false);
                LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false,
                });
                id++;
                document.querySelector("#counter").innerHTML = "Total: " + id;
            }
            input.value = "";
        }
    });
    function completeToDo(element) {
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
        LIST[element.id].done = LIST[element.id].done ? false : true;
    }
    function removeToDo(element) {
        element.parentNode.parentNode.removeChild(element.parentNode);
        LIST[element.id].trash = true;
        id--;
        document.querySelector("#counter").innerHTML = "Total: " + id;
    }
    list.addEventListener("click", function (event) {
        const element = event.target;
        const elementJob = element.attributes.job.value;
        if (elementJob == "complete") {
            completeToDo(element);
        }
        else if (elementJob == "delete") {
            removeToDo(element);
        }
    });
});
//# sourceMappingURL=script9.js.map