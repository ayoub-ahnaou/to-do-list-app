const field_value = document.getElementById("task_input");
const addBtn = document.getElementById("task_btn");
const tasks = document.querySelector(".tasks");

addBtn.addEventListener("click", () => {
  if (field_value.value != "") {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML += `
        <label>${field_value.value}</label>
        <div class="btns">
            <p class="markdone">finish</p>
            <p class="delete">delete</p>
        </div>
        `;
    tasks.appendChild(item);
    field_value.value = "";
    field_value.focus();
  }
});

tasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("markdone")){
        e.target.parentElement.parentElement.classList.toggle("checked");
    }
});

tasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
})

