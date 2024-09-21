const task_input = document.getElementById("task_input");
const task_btn = document.getElementById("task_btn");

const tasks = document.getElementById("taskss");

task_btn.addEventListener("click" , () => {
    if(task_input.value != ""){
        tasks.innerHTML += `
           <div class="task">
                <input type="checkbox" id="task_done" name="task_title">
                <label id="task_title" class="" htmlFor="task_done">${task_input.value}</label>
                <p id="task_delete">&#x2715;</p>
            </div> 
        `;
        task_input.value = "";
    }
})