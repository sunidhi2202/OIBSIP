document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-btn');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const pendingTasksList = document.getElementById('pending-tasks-list');
    const completedTasksList = document.getElementById('completed-tasks-list');

    saveBtn.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const currentTime = new Date().toLocaleString();

        if (title === '' || description === '') {
            alert('Please fill out both fields.');
            return;
        }

        const task = {
            title: title,
            description: description,
            addedTime: currentTime,
            completed: false,
            id: Date.now()
        };

        addTaskToList(task, pendingTasksList);

        titleInput.value = '';
        descriptionInput.value = '';
    });

    function addTaskToList(task, list) {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong>
                <p>${task.description}</p>
                <small>Added on: ${task.addedTime}</small>
                ${task.completed ? `<small>Completed on: ${task.completedTime}</small>` : ''}
            </div>
            <div>
                <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const completeBtn = li.querySelector('.complete-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            task.completed = !task.completed;
            task.completedTime = new Date().toLocaleString();
            li.classList.toggle('completed');
            if (task.completed) {
                completedTasksList.appendChild(li);
                completeBtn.textContent = 'Undo';
                li.querySelector('div').innerHTML += `<small>Completed on: ${task.completedTime}</small>`;
            } else {
                pendingTasksList.appendChild(li);
                completeBtn.textContent = 'Complete';
                li.querySelector('small:last-of-type').remove();
            }
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        list.appendChild(li);
    }
});
