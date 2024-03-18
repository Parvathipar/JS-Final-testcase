
function addTask() {
    let input = document.getElementById("taskinput").value;
    if (input === "") {
        alert("Please enter the task");
    } else {
        const list = document.getElementById("list");
        let newTask = document.createElement("li");

        let taskContent = document.createTextNode(input);
        newTask.appendChild(taskContent);

    
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
       
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                newTask.style.textDecoration = 'line-through';
                
            } else {
                newTask.style.textDecoration = 'none';
            }
            updateLocalStorage();
        });
        newTask.appendChild(checkbox);

   
        let removeButton = document.createElement('img');
        removeButton.setAttribute('src', "icons8-delete-50.png");
        removeButton.setAttribute('width', '20px');
        removeButton.setAttribute('height', '20px');
        removeButton.setAttribute('class', 'remove-button');
        removeButton.addEventListener('click', function() {
            list.removeChild(newTask);
            updateLocalStorage();
        });
        newTask.appendChild(removeButton);

        list.appendChild(newTask);

     
        updateLocalStorage();

    
        document.getElementById("taskinput").value = "";
    }
}


function updateLocalStorage() {
    const tasks = [];
    const listItems = document.querySelectorAll("#list li");
    listItems.forEach(item => {
        const task = {
            content: item.firstChild.textContent,
            completed: item.querySelector('input[type="checkbox"]').checked
        };
        tasks.push(task);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        const list = document.getElementById("list");
        tasks.forEach(task => {
            let newTask = document.createElement("li");
            let taskContent = document.createTextNode(task.content);
            newTask.appendChild(taskContent);
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    newTask.style.textDecoration = 'line-through';
                } else {
                    newTask.style.textDecoration = 'none';
                }
                updateLocalStorage();
            });
            newTask.appendChild(checkbox);
            let removeButton = document.createElement('img');
            removeButton.setAttribute('src', "icons8-delete-50.png");
            removeButton.setAttribute('width', '20px');
            removeButton.setAttribute('height', '20px');
            removeButton.setAttribute('class', 'remove-button');
            removeButton.addEventListener('click', function() {
                list.removeChild(newTask);
                updateLocalStorage();
            });
            newTask.appendChild(removeButton);
            list.appendChild(newTask);
        });
    }
}


window.addEventListener('load', loadTasks);




