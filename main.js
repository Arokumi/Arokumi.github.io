function toggleEdit(){
    document.getElementById("popup-1").classList.toggle("active");
}


    function submitFn(){
        document.getElementById("popup-1").classList.toggle("active");
        event.preventDefault();
        let name = document.getElementById('username').value;
        document.getElementById('Pname').innerHTML = name;
    
        let occupation = document.getElementById('occupation').value;
        document.getElementById('Poccupation').innerHTML = occupation;
    
        let description = document.getElementById('description').value;
        document.getElementById('Pdescription').innerHTML = description;
    
        let availability = document.getElementsByName('availability');
        for(let i = 0; i < availability.length; i++){
            let item = availability[i]
            // let f = document.getElementById('availabilityFull')
            // let p = document.getElementById()
            if (item.checked === true && item.value === 'full'){
                document.getElementById('Pavailability').innerHTML = "Full-Time";
            } else if (item.checked === true && item.value === 'part'){
                document.getElementById('Pavailability').innerHTML = "Part-Time";
            }
        };
        
        let age = document.getElementById('age').value;
        document.getElementById('Page').innerHTML = age;
    
        let location = document.getElementById('location').value;
        document.getElementById('Plocation').innerHTML = location;
    
        let experience = document.getElementById('experience').value;
        document.getElementById('Pexperience').innerHTML = experience;
    
        let email = document.getElementById('email').value;
        document.getElementById('Pemail').innerHTML = email;
    
        let number = document.getElementById('number').value;
        document.getElementById('Pnumber').innerHTML = number;
    };


    //TO DO LIST//

    window.addEventListener('load', () => {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const newTask = document.querySelector('#newtaskform');
        newTask.addEventListener('submit', e => {
            e.preventDefault();

            const task = {
                content: e.target.elements.taskname.value,
                done: false,
                createdAt: new Date().getTime()
            }

            if(task.content == ""){
                alert("Error, input task name please")
                console.error('Task has no name');
                return
            } else {
                tasks.push(task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                e.target.reset();

                DisplayTasks();
            }
        })
        DisplayTasks();
    })

    function DisplayTasks (){
        const taskList = document.querySelector('#tasks');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task')

            const label = document.createElement('label');
            const input = document.createElement('input');
            const content = document.createElement('div');
            const actions = document.createElement('div');
            const edit = document.createElement('button');
            const deleteButton = document.createElement('button');

            input.type = 'checkbox';
            input.checked = task.done;
            input.classList.add('checkbox');
            content.classList.add('content');
            actions.classList.add('actions');
            edit.classList.add('edit');
            deleteButton.classList.add('delete');

            content.innerHTML = `<input type="text" class="text" value="${task.content}" readonly>`; 
            edit.innerHTML = 'Edit';
            deleteButton.innerHTML = 'Delete'

            label.appendChild(input);
            actions.appendChild(edit);
            actions.appendChild(deleteButton);
            taskItem.appendChild(label);
            taskItem.appendChild(content);
            taskItem.appendChild(actions);
            

            taskList.appendChild(taskItem);

            if (task.done) {
                taskItem.classList.add('done');

            }
            input.addEventListener('click', e => {
                task.done = e.target.checked;
                localStorage.setItem('tasks', JSON.stringify(tasks));

                if (tasks.done) {
                    taskItem.classList.add('done');
                } else {
                    taskItem.classList.remove('done');
                }
                DisplayTasks();
            })

            edit.addEventListener('click', e => {
                const input = content.querySelector('input');
                input.removeAttribute('readonly');
                input.focus();
                input.addEventListener('blur', e => {
                    input.setAttribute('readonly', true);
                    task.content = e.target.value;
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    DisplayTasks();
                })
            })

            deleteButton.addEventListener('click', e => {
                tasks = tasks.filter(t => t != task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                DisplayTasks();
            })
        })
    }
