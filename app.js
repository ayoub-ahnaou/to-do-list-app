const tasks = document.getElementById("tasks");

const input_value = document.getElementById("task_input");
const btn_add = document.getElementById("task_btn");

btn_add.addEventListener("click", () => {
  if (input_value.value != "") {
    add_task(input_value.value);
    
    input_value.value = "";
    input_value.focus();
  }
});

function add_task(title){
}
